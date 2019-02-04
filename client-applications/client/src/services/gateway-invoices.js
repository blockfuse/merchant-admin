import {HttpWrapper} from './http-wrapper';
import {GatewayInvoice} from 'models/gateway-invoice';

export class GatewayInvoicesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getGatewayInvoices() {
    return this.http.get('/gateway-invoices').then(result => {
      return result.map(item => {
        return new GatewayInvoice(item);
      });
    });
  }
  cancel(gatewayInvoice) {
    return this.http.delete(`/gateway-invoices/${gatewayInvoice.id}`).then(result => {
      return result;
    });
  }
  payInvoice(invoice) {
    return this.http.post(`/gateway-invoices/${invoice.id}/pay`, invoice).then(result => {
      return new GatewayInvoice(result);
    });
  }
}
