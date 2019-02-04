import {DataStore} from 'services/data-store';

export class Details {
  gatewayInvoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  activate(params) {
    const id = params.invoice_id;
    this.gatewayInvoice = this.dataStore.getGatewayInvoiceById(id);
  }
}
