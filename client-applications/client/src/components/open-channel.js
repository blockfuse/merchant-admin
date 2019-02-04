import {bindable, containerless} from 'aurelia-templating';
import {ChannelsService} from 'services/channels';

@containerless
export class OpenChannel {
  @bindable publicKey = '';
  @bindable showPublicKey = true;
  @bindable callback = () => { console.log('should be overridden'); };
  amount = 0;

  static inject = [ChannelsService];
  constructor(channelsService) {
    this.channelsService = channelsService;
  }

  connect() {
    return this.channelsService.connectChannel(this.publicKey, this.amount).then(result => {
      this.callback({channel: result});
      return result;
    });
  }
}
