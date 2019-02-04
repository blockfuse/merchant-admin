import {bindable, containerless} from 'aurelia-templating';
import {InvoicesService} from 'services/invoices';
import {DataStore} from 'services/data-store';

@containerless
export class CreateInvoice {
  @bindable newInvoiceCreated = () => { console.error('Should override.'); };
  description = '';
  tokens = 0;
  activeCurrency = 'usd';

  static inject = [InvoicesService, DataStore];
  constructor(invoicesService, dataStore) {
    this.invoicesService = invoicesService;
    this.dataStore = dataStore;
  }
  attached() {
    this.description = new Date().getTime();
  }

  createInvoice() {
    const currencyCode = this.activeCurrency;
    const description = this.description;
    const tokens = this.tokens;

    return this.invoicesService.createInvoice(description, tokens, currencyCode).then(result => {
      this.dataStore.invoices.push(result);
      this.newInvoiceCreated({invoice: result})
    });
  }
  setCurrency(currency) {
    this.activeCurrency = currency;
    this.isCurrencySelectionOpen = false;
  }
  toggleCurrencySelectionOpen() {
    this.isCurrencySelectionOpen = !this.isCurrencySelectionOpen;
  }
}
