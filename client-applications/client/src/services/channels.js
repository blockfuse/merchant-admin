import {HttpWrapper} from './http-wrapper';
import {Channel} from 'models/channel';

export class ChannelsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getChannels() {
    return this.http.get('/channels').then(result => {
      return result.channels.map(item => {
        return new Channel(item);
      });
    });
  }
  connectChannel(publicKey, amount) {
    let payload = {
      amount,
      publicKey
    };
    return this.http.post('/channels', payload).then(result => {
      return new Channel(result);
    });
  }
}
