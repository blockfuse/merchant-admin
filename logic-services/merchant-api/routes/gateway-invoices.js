const express = require('express');
const router = express.Router();
const gatewayApiService = new (require('../services/gateway-api'));
const invoicesService = require('@coinmesh/lnd-adapter').invoicesService;
const paymentsService = require('@coinmesh/lnd-adapter').paymentsService;
const dbInvoicesService = require('../services/invoices');
const dbGatewayInvoicesService = require('../services/gateway-invoices');

router.get('/', (req, res, next) => {
  dbGatewayInvoicesService.getAll().then(dbInvoices => {
    return res.json(dbInvoices);
  });
});

router.put('/:id/sweep-request', (req, res, next) => {
  const id = req.params.id;

  dbInvoicesService.getById(id).then(dbInvoice => {
    invoicesService.getInvoice(dbInvoice.invoiceId).then(invoice => {
      if (!invoice) {
        throw new Error('Lightning invoice not found.')
      }
      if (!dbInvoice) {
        throw new Error('No DbInvoice found.')
      }
      if (dbInvoice.status !== 'paid') {
        throw new Error('Cannot sweep an invoice that is not paid.');
      }
      const invoiceRequest = {
        tokens: invoice.tokens,
        description: getDescriptionFromDbInvoice(dbInvoice)
      };
      let result;

      gatewayApiService.requestInvoice(invoiceRequest).then(newInvoice => {
        dbInvoice.status = 'invoiced';

        const gatewayInvoicePromise = dbGatewayInvoicesService.create(newInvoice).then(dbGatewayInvoice => {
          result = dbGatewayInvoice
        });
        const dbInvoicePromise = dbInvoicesService.update(id, dbInvoice);

        Promise.all([gatewayInvoicePromise, dbInvoicePromise]).then(dbGatewayInvoice => {
          return res.json(result);
        })
      });
    })
  }).catch(error => {
    console.error(error)
    res.status(500).send(error);
  });
});

router.post('/:id/pay', (req, res, next) => {
  const id = req.params.id;

  dbInvoicesService.getById(id).then(dbInvoice => {
    invoicesService.getInvoice(dbInvoice.invoiceId).then(invoice => {
      const dbGatewayInvoiceDescription = getDescriptionFromDbInvoice(dbInvoice);

      dbGatewayInvoicesService.getByDescription(dbGatewayInvoiceDescription).then(dbGatewayInvoice => {
        paymentsService.pay(dbGatewayInvoice.request, 1000).then(result => {
          dbInvoice.status = 'swept';

          dbInvoicePromise = dbInvoicesService.update(id, dbInvoice).then(updatedInvoice => {
            return res.json(updatedInvoice);
          });
        }).catch(error => {
          console.error(error)
          res.status(500).send(error);
        });
      });
    });
  }).catch(error => {
    console.error(error)
    res.status(500).send(error);
  });
});

module.exports = router;

function getDescriptionFromDbInvoice(dbInvoice) {
  return `${dbInvoice.merchantId} || ${dbInvoice.invoiceId}`;
}
