export class NetworkInfo {
  average_channel_size = '';
  channel_count = '';
  maximum_channel_size = '';
  minimum_channel_size = '';
  node_count = '';
  total_capacity = '';
  type = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
