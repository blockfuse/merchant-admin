import {bindable} from 'aurelia-templating';

export class TransactionsList {
  @bindable title = '';
  @bindable transactions = [];
  @bindable subPath = '/invoices/';
}
