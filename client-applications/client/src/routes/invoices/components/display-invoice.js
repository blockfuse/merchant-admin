import {InvoicesService} from 'services/invoices';
import {bindable} from 'aurelia-templating';
import {Router} from 'aurelia-router';
import $ from 'jquery';

export class DisplayInvoice {
  @bindable invoice;
  @bindable phoneNumber;
  phoneNumberSet = false;

  qrCodeElement;

  static inject = [InvoicesService, Router];
  constructor(invoicesService, router) {
    this.invoicesService = invoicesService;
    this.router = router;
  }

  attached() {
    new QRCode(this.qrCodeElement, this.invoice.request);
  }
  submitPhoneNumber() {
    const number = this.phoneNumber;

    return this.invoicesService.setPhoneNumber(this.invoice, number).then(result => {
      this.phoneNumberSet = true;
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
