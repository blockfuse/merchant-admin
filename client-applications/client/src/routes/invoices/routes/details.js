import {DataStore} from 'services/data-store';

export class Details {
  invoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  activate(params) {
    const id = params.invoice_id;
    this.invoice = this.dataStore.getInvoiceById(id);
  }
}
