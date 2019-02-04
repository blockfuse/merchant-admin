import {GatewayInvoicesService} from 'services/gateway-invoices';
import {bindable} from 'aurelia-templating';
import {Router} from 'aurelia-router';
import $ from 'jquery';

export class DisplayGatewayInvoice {
  @bindable invoice;
  @bindable phoneNumber;
  phoneNumberSet = false;

  qrCodeElement;

  static inject = [GatewayInvoicesService, Router];
  constructor(invoicesService, router) {
    this.invoicesService = invoicesService;
    this.router = router;
  }

  attached() {
    new QRCode(this.qrCodeElement, this.invoice.request);
  }
  pay() {
    return this.gatewayInvoicesService.payInvoice(this.invoice).then(result => {
      console.log('-'.repeat(100))
      console.log(result)
      if (result.status !== this.invoice.status) {
        this.invoice.status = result.status
      }
    });
  }
  cancel() {
    return this.invoicesService.cancel(this.invoice).then(result => {
      this.invoice.status = 'cancelled';
      this.close();
    });
  }
  close() {
    return this.router.navigateToRoute('list');
  }
}
