const express = require('express');
const router = express.Router();
const paymentsService = require('@coinmesh/lnd-adapter').paymentsService;

router.post('/', (req, res, next) => {
  const request = req.body.request;

  paymentsService.pay(request, 1000).then(result => {
    return res.json(result);
  }).catch(error => {
    console.error(error);
    res.status(500).send(error);
  });
});

module.exports = router;
