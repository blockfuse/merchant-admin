import {bindable, containerless} from 'aurelia-templating';
import {InvoicesService} from 'services/invoices';
import {GatewayInvoicesService} from 'services/gateway-invoices';

@containerless
export class InvoicesList {
  @bindable invoices = [];
  @bindable refreshCallback = () => { console.log('Should be overridden.');};

  isRefreshingInvoices = false;
  gatewayInvoicesService;
  invoicesService;

  static inject = [GatewayInvoicesService, InvoicesService];
  constructor(gatewayInvoicesService, invoicesService) {
    this.gatewayInvoicesService = gatewayInvoicesService;
    this.invoicesService = invoicesService;
  }

  requestSweep(invoice) {
    return this.invoicesService.requestSweep(invoice).then(result => {
      if (result.status !== invoice.status) {
        invoice.status = result.status;
      }
    });
  }
  confirm(gatewayInvoice) {
    return this.gatewayInvoicesService.payInvoice(gatewayInvoice).then(result => {
      if (result.status !== gatewayInvoice.status) {
        gatewayInvoice.status = result.status;
      }
    });
  }
  refresh() {
    this.isRefreshingInvoices = true;
    return this.refreshCallback().then(() => {
      setTimeout(() => {
        this.isRefreshingInvoices = false;
      }, 500);
    });
  }
}
