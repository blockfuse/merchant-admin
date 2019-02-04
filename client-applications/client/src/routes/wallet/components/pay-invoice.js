import {bindable} from 'aurelia-templating';
import {InvoicesService} from 'services/invoices';

export class PayInvoice {
  @bindable invoiceRequest;

  status = '';
  invoicesService;

  static inject = [InvoicesService];
  constructor(invoicesService) {
    this.invoicesService = invoicesService;
  }
  pay() {
    this.invoicesService.pay(this.invoiceRequest).then(result => {
      console.log('-'.repeat(100))
      console.log(result)
      this.status = 'Success';
    });
  }
}
