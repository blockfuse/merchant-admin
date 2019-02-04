import {bindable, containerless} from 'aurelia-templating';

@containerless
export class ChannelsList {
  @bindable channels = [];
}
