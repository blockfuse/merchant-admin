const express = require('express');
const router = express.Router();
const invoicesService = require('@coinmesh/lnd-adapter').invoicesService;
const dbInvoicesService = require('../services/invoices');
const usersService = require('../services/users');
const gatewayApiService = new (require('../services/gateway-api'));

router.post('/', (req, res, next) => {
  const description = req.body.description;
  const tokens = req.body.tokens;
  const currency = req.body.currency;

  const invoiceRequest = {
    description,
    tokens,
    currency,
  };

  gatewayApiService.getExchangeRate(`${'btc'}usd`).then(exchangeRate => {
    const lastExchangeRate = parseFloat(exchangeRate);

    let finalTokens;

    if (currency === 'usd') {
      const dollars = tokens;
      const satoshisPerDollar = 100000000 / lastExchangeRate;

      finalTokens = parseInt(satoshisPerDollar * dollars);

      finalTokens = parseInt(finalTokens * 1.05);
    } else {
      finalTokens = tokens;
    }
    invoiceRequest.tokens = finalTokens;

    invoicesService.createInvoice(invoiceRequest).then(result => {
      getCurrent(req, res, next).then(currentUser => {
        result.quotedRate = lastExchangeRate;
        result.originalCurrency = currency;
        result.createdById = currentUser.id;
        result.merchantId = currentUser.id;
        result.invoiceId = result.id;
        result.status = 'created';
        delete result.id;

        dbInvoicesService.create(result).then(newInvoice => {
          return res.json(newInvoice);
        });
      });
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  dbInvoicesService.getById(id).then(dbInvoice => {
    if (dbInvoice.status !== 'created') {
      throw new Error('Cannot cancel an invoice that is not in created state.');
    }
    dbInvoice.status = 'cancelled';

    dbInvoicesService.update(id, dbInvoice).then(newInvoice => {
      return res.json(newInvoice);
    });
  }).catch(error => {
    console.error(error)
    res.status(500).send(error);
  });
});

router.put('/:id/set-custref', (req, res, next) => {
  const id = req.params.id;
  const number = req.body.number;

  dbInvoicesService.getById(id).then(dbInvoice => {
    dbInvoice.customerRef = number;

    dbInvoicesService.update(id, dbInvoice).then(newInvoice => {
      return res.json(newInvoice);
    });
  }).catch(error => {
    console.error(error)
    res.status(500).send(error);
  });
});

router.get('/', (req, res, next) => {
  dbInvoicesService.getAll().then(dbInvoices => {
    invoicesService.getInvoices().then(result => {
      const invoices = result.invoices;
      let promises = [];

      invoices.forEach(invoice => {
        const match = dbInvoices.find(dbInvoice => dbInvoice.invoiceId.toString() === invoice.id.toString());

        if (match) {
          let updates = {};

          if (invoice.is_confirmed !== match.is_confirmed) {
            updates.is_confirmed = true;
          }
          if (match.status === 'created' && invoice.is_confirmed) {
            updates.status = 'paid';
          }

          if (Object.keys(updates).length > 0) {
            const updatedInvoice = Object.assign(match, updates);

            const updatePromise = dbInvoicesService.update(updatedInvoice.id, updatedInvoice);

            promises.push(updatePromise);
          }
        } else {
          console.error('No match found.');
        }
      });

      Promise.all(promises).then(() => {
        return res.json(dbInvoices);
      });
    });
  });
});

module.exports = router;

function getCurrent(req, res, next) {
  return usersService.getById(req.user.sub)
    .catch(err => next(err));
}
