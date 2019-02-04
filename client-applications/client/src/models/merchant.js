export class Merchant {
  id = '';
  name = '';
  description = '';
  pubkey = '';

  type = 'merchant';

  constructor(data) {
    Object.assign(this, data);
  }
}
