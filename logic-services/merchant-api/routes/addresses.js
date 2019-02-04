const express = require('express');
const router = express.Router();
const addressesService = require('@coinmesh/lnd-adapter').addressesService;

router.get('/new', (req, res, next) => {
  addressesService.getNewAddress('np2wpkh').then(result => {
    return res.json(result);
  }).catch(error => {
    console.error(error);
  });
});

module.exports = router;
