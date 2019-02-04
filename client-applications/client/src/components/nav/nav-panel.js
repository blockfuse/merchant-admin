import {bindable} from 'aurelia-templating';

export class NavPanel {
  @bindable router;
  @bindable isOpen = true;

  @bindable clientsOpen = true;

  static inject = [];
  constructor() {}

  toggle(propName) {
    this[propName] = !this[propName];
  }
}
