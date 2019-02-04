import {DataStore} from 'services/data-store';
import {InvoicesService} from 'services/invoices';

export class List {
  static inject = [InvoicesService, DataStore];
  constructor(invoicesService, dataStore) {
    this.invoicesService = invoicesService;
    this.dataStore = dataStore;
  }

  refreshInvoices() {
    this.dataStore.invoices = [];
    return this.invoicesService.getInvoices().then(invoices => {
      this.dataStore.invoices = invoices;
    });
  }
}
