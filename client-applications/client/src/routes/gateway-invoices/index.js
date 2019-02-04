import {Router} from 'aurelia-router';
import {GatewayInvoicesService} from 'services/gateway-invoices';
import {DataStore} from 'services/data-store';

export class Index {
  router;

  static inject = [GatewayInvoicesService, DataStore];
  constructor(gatewayInvoicesService, dataStore) {
    this.gatewayInvoicesService = gatewayInvoicesService;
    this.dataStore = dataStore;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', title: 'Invoices List' },
      { route: '/:invoice_id', name: 'details', moduleId: './routes/details', title: 'Invoice Details' }
    ]);

    this.router = router;

    return this.gatewayInvoicesService.getGatewayInvoices().then(gatewayInvoices => {
      this.dataStore.gatewayInvoices = gatewayInvoices;
    });
  }
}
