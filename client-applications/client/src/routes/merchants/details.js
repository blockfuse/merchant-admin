import {DataStore} from 'services/data-store';
import {MerchantsService} from 'services/merchants';
import {NodeInfoService} from 'services/node-info';
import {Merchant} from 'models/merchant';

export class Details {
  static inject = [DataStore, MerchantsService, NodeInfoService];
  constructor(dataStore, merchantsService, nodeInfoService) {
    this.dataStore = dataStore;
    this.merchantsService = merchantsService;
    this.nodeInfoService = nodeInfoService;
  }

  connectedToGateway(peer) {
    this.dataStore.merchant.pubkey = peer.public_key;
    this.dataStore.gatewayPeer = peer;

    return this.merchantsService.updateMerchant(this.dataStore.merchant).then(result => {
      this.isEditing = false;
    });
  }
  attached() {
    return this.nodeInfoService.getNodeInfo().then(result => {
      this.nodeInfo = result;
    });
  }
}
