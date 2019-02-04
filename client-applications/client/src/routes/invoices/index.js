import {Router} from 'aurelia-router';
import {InvoicesService} from 'services/invoices';
import {DataStore} from 'services/data-store';

export class Index {
  router;

  static inject = [InvoicesService, DataStore];
  constructor(invoicesService, dataStore) {
    this.invoicesService = invoicesService;
    this.dataStore = dataStore;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', title: 'Invoices List' },
      { route: '/:invoice_id', name: 'details', moduleId: './routes/details', title: 'Invoice Details' },
      { route: '/create', name: 'create', moduleId: './routes/create', title: 'Create Invoice' }
    ]);

    this.router = router;

    return this.invoicesService.getInvoices().then(invoices => {
      this.dataStore.invoices = invoices;
    });
  }
}
