import {bindable, containerless} from 'aurelia-templating';
import {MerchantsService} from 'services/merchants';
import {DataStore} from 'services/data-store';

@containerless
export class MerchantDetails {
  @bindable merchant;

  static inject = [MerchantsService, DataStore];
  constructor(merchantsService, dataStore) {
    this.merchantsService = merchantsService;
    this.dataStore = dataStore;
  }

  edit() {
    this.isEditing = true;
  }
  save() {
    return this.merchantsService.updateMerchant(this.merchant).then(result => {
      this.dataStore.merchant = this.merchant;
      this.isEditing = false;
    });
  }
}
