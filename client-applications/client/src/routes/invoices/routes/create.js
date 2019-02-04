import {DataStore} from 'services/data-store';

export class Create {
  invoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
  newInvoiceCreated(invoice) {
    this.invoice = invoice;
  }
}
