import {GatewayInvoicesService} from 'services/gateway-invoices';
import {DataStore} from 'services/data-store';

export class Index {
  static inject = [GatewayInvoicesService, DataStore];
  constructor(gatewayInvoicesService, dataStore) {
    this.gatewayInvoicesService = gatewayInvoicesService;
    this.dataStore = dataStore;
  }
  activate() {
    return this.gatewayInvoicesService.getGatewayInvoices().then(gatewayInvoices => {
      this.dataStore.gatewayInvoices = gatewayInvoices;
    });
  }
}
