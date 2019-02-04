import {DataStore} from 'services/data-store';

export class Details {
  peer;
  isOpeningChannel = false;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  toggleOpenChannel() {
    this.isOpeningChannel = !this.isOpeningChannel;
  }
  activate(params) {
    const peerPublicKey = params.public_key;
    this.peer = this.dataStore.getPeerFromPublicKey(peerPublicKey);
  }
}
