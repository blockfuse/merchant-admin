import {HttpWrapper} from './http-wrapper';
import {Invoice} from 'models/invoice';
import {GatewayInvoice} from 'models/gateway-invoice';

export class InvoicesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInvoices() {
    return this.http.get('/invoices').then(result => {
      return result.map(item => {
        return new Invoice(item);
      });
    });
  }
  createInvoice(description, tokens, currency) {
    const payload = {
      description,
      tokens,
      currency
    };

    return this.http.post('/invoices', payload).then(result => {
      return new Invoice(result);
    });
  }
  pay(invoiceRequest) {
    return this.http.post(`/pay`, {request: invoiceRequest}).then(result => {
      return result;
    });
  }
  markPaid(invoice) {
    return this.http.put(`/invoices/${invoice.id}/mark-paid`, invoice).then(result => {
      return new Invoice(result);
    });
  }
  cancel(invoice) {
    return this.http.delete(`/invoices/${invoice.id}`).then(result => {
      return result;
    });
  }
  setPhoneNumber(invoice, number) {
    let payload = {
      number
    };

    return this.http.put(`/invoices/${invoice.id}/set-custref`, payload).then(result => {
      return new Invoice(result);
    });
  }
  requestSweep(invoice) {
    return this.http.put(`/gateway-invoices/${invoice.id}/sweep-request`, invoice).then(result => {
      return new GatewayInvoice(result);
    });
  }
}
