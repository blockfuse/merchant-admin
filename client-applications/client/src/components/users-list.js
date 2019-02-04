import {bindable, containerless} from 'aurelia-templating';
import {UsersService} from 'services/users';

@containerless
export class UsersList {
  @bindable users = [];

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }
  approve(user) {
    return this.usersService.approve(user).then(result => {
      user.isApproved = true;
    });
  }
}
