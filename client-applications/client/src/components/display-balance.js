import {bindable, containerless} from 'aurelia-templating';

@containerless
export class DisplayBalance {
  @bindable balances;
}
