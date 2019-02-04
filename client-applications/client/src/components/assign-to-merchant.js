import {bindable, containerless} from 'aurelia-templating';
import {UsersService} from 'services/users';
import {DataStore} from 'services/data-store';
import {User} from 'models/user';

@containerless
export class AssignToMerchant {
  @bindable user;
  selectedMerchant;

  static inject = [UsersService, DataStore];
  constructor(usersService, dataStore) {
    this.usersService = usersService;
    this.dataStore = dataStore;
  }

  assignToMerchant() {
    const merchant = this.selectedMerchant;
    const user = this.user;

    return this.usersService.setMerchant(user, merchant).then(result => {
      this.user.setMerchant(merchant);
    });
  }
}
