import {HttpWrapper} from './http-wrapper';
import {Balance} from 'models/balance';

export class BalancesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getBalances() {
    return this.http.get('/balances').then(result => {
      return result = new Balance(result);
    });
  }
}
