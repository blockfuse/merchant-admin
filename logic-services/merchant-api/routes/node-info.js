const express = require('express');
const router = express.Router();
const networkInfoService = require('@coinmesh/lnd-adapter').networkInfoService;
const walletInfoService = require('@coinmesh/lnd-adapter').walletInfoService;

router.get('/', (req, res, next) => {
  let results = {};

  networkInfoService.getNetworkInfo().then(networkInfo => {
    results.networkInfo = networkInfo;
    walletInfoService.getWalletInfo().then(walletInfo => {
      results.walletInfo = walletInfo;
      return res.json(results);
    });
  });
});

module.exports = router;
