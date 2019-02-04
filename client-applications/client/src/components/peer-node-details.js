import {bindable} from 'aurelia-templating';
import {DataStore} from 'services/data-store';

export class PeerNodeDetails {
  @bindable peer;
  @bindable channels = [];
  isOpeningChannel = false;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  toggleOpenChannel() {
    this.isOpeningChannel = !this.isOpeningChannel;
  }
  attached(params) {
    this.channels = this.dataStore.getChannelsByPubkey(this.peer.public_key);
  }
  channelOpened(newChannel) {
    newChannel.is_active = false;

    this.dataStore.channels.push(newChannel);
    this.channels.push(newChannel);
  }
}
