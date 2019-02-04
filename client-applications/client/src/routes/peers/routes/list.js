import {DataStore} from 'services/data-store';

export class List {
  static inject = [DataStore];

  constructor(dataStore) {
    this.dataStore = dataStore;
  }
  newPeerCreated(peer) {
    this.dataStore.peers.push(peer);
  }
}
