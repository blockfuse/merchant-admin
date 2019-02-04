export class User {
  createdDate;
  firstName = '';
  lastName = '';
  username = '';
  token = '';

  constructor(data) {
    Object.assign(this, data);
  }
  setMerchant(merchant) {
    this.merchant = merchant;
  }
}
