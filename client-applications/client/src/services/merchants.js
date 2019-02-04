import {HttpWrapper} from './http-wrapper';
import {DataStore} from './data-store';
import {Merchant} from 'models/merchant';

export class MerchantsService {
  static inject = [HttpWrapper, DataStore];
  constructor(http, dataStore) {
    this.http = http;
    this.dataStore = dataStore;
  }

  getMerchant() {
    return this.http.get('/merchants').then(result => {
      if (result) {
        return new Merchant(result);
      }
    });
  }
  createMerchant(name, description, pubkey) {
    const payload = {
      name,
      description,
      pubkey
    };
    return this.http.post('/merchants', payload).then(result => {
      return new Merchant(result);
    });
  }
  updateMerchant(merchant) {
    return this.http.put(`/merchants/${merchant.id}`, merchant).then(result => {
      return new Merchant(result);
    });
  }
}
