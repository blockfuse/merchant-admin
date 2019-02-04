export class Order {
  client_order_id = '';
  symbol = '';
  amount = '';
  price = '';
  side = '';
  type = '';
  options = [];

  type = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
