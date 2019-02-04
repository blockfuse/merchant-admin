export class OrderResponse {
  order_id = '';
  client_order_id = '';
  symbol = '';
  price = '';
  avg_execution_price = '';
  side = '';
  type = '';
  timestamp = '';
  timestampms = '';
  is_live = '';
  is_cancelled = '';
  options = [];
  executed_amount = '';
  remaining_amount = '';
  original_amount = '';

  type = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
