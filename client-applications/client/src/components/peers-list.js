import {bindable, containerless} from 'aurelia-templating';
import {PeersService} from 'services/peers';

@containerless
export class PeersList {
  @bindable peers = [];

  static inject = [PeersService];
  constructor(peersService) {
    this.peersService = peersService;
  }

  disconnect(peer) {
    return this.peersService.disconnectPeer(peer).then(result => {
      let index = this.peers.indexOf(peer);
      this.peers.splice(index, 1);
    });
  }
}
