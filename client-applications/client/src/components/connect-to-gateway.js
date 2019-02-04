import {bindable, containerless} from 'aurelia-templating';
import {PeersService} from 'services/peers';

@containerless
export class ConnectToGateway {
  @bindable publicKey = '';
  @bindable host = '';
  @bindable port = '9735';
  @bindable callback = () => { throw new Error('Must be overridden'); };

  static inject = [PeersService];
  constructor(peersService) {
    this.peersService = peersService;
  }

  connect() {
    this.peersService.connectPeer(this.publicKey, this.host, this.port).then(newPeer => {
      this.callback({peer: newPeer});
    });
  }
}
