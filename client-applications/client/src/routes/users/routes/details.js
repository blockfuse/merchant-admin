import {DataStore} from 'services/data-store';
import {UsersService} from 'services/users';

export class Details {
  user;
  token;
  isOpeningChannel = false;

  static inject = [DataStore, UsersService];
  constructor(dataStore, usersService) {
    this.dataStore = dataStore;
    this.usersService = usersService;
  }

  toggleAssignToMerchant() {
    this.isAssigningToMerchant = !this.isAssigningToMerchant;
  }
  activate(params) {
    const id = params.user_id;
    this.user = this.dataStore.getUserById(id);
  }
  getTokenForUser() {
    return this.usersService.getToken(this.user).then(token => {
      this.token = token;
    });
  }
}
