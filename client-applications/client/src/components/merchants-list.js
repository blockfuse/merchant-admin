import {bindable, containerless} from 'aurelia-templating';

@containerless
export class MerchantsList {
  @bindable merchants = [];
}
