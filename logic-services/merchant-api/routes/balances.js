const express = require('express');
const router = express.Router();
const balancesService = require('@coinmesh/lnd-adapter').balancesService;

router.get('/', (req, res, next) => {
  let result = {};
  balancesService.getChainBalance().then(chainBalance => {
    result.chainBalance = chainBalance.chain_balance;

    balancesService.getChannelBalance().then(channelBalances => {
      result.channelBalance = channelBalances.channel_balance;
      result.pendingChannelBalance = channelBalances.pending_channel_balance;

      balancesService.getPendingChainBalance().then(pendingChainBalances => {
        result.pendingChainBalance = pendingChainBalances.pending_chain_balance;
        return res.json(result);
      });
    });
  });
});

module.exports = router;
