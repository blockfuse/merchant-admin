const express = require('express');
const router = express.Router();
const peersService = require('@coinmesh/lnd-adapter').peersService;

class Channel {
  constructor(data) {
    this.id = id;
  }
}

router.post('/', (req, res, next) => {
  const socket = `${req.body.host}:${req.body.port}`;
  const publicKey = req.body.publicKey;

  peersService.addPeer(socket, publicKey).then(result => {
    return res.json(result);
  });
});

router.delete('/:public_key', (req, res, next) => {
  const publicKey = req.params.public_key;

  peersService.removePeer(publicKey).then(result => {
    return res.json(result);
  });
});

router.get('/', (req, res, next) => {
  peersService.getPeers().then(result => {
    return res.json(result);
  });
});

module.exports = router;
