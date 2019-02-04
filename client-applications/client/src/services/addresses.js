import {HttpWrapper} from './http-wrapper';
import {Address} from 'models/address';

export class AddressesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getAddress() {
    return this.http.get('/addresses/new').then(result => {
      return new Address(result);
    });
  }
}
