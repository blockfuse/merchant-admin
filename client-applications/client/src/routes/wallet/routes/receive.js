import {DataStore} from 'services/data-store';
import {AddressesService} from 'services/addresses';

export class Receive {
  receiveAddress;

  static inject = [DataStore, AddressesService];
  constructor(dataStore, addressesService) {
    this.dataStore = dataStore;
    this.addressesService = addressesService;
  }
  attached() {
    return this.getNewAddress();
  }
  getNewAddress() {
    return this.addressesService.getAddress().then(address => {
      this.receiveAddress = address;
    });
  }
}
