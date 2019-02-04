const express = require('express');
const router = express.Router();
const merchantsService = require('../services/merchants');

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const pubkey = req.body.pubkey;

  const merchantRequest = {
    name,
    description,
    pubkey
  };

  merchantsService.create(merchantRequest).then(newMerchant => {
    return res.json(newMerchant);
  });
});

router.get('/', (req, res, next) => {
  merchantsService.getMerchant().then(result => {
    return res.json(result);
  });
});

router.put('/:id', (req, res, next) => {
  merchantsService.update(req.params.id, req.body)
    .then(newMerchant => res.json(newMerchant))
    .catch(err => next(err));
});

module.exports = router;
