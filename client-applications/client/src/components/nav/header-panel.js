import {bindable, containerless} from 'aurelia-templating';
import {UsersService} from 'services/users';

@containerless
export class HeaderPanel {
  @bindable isOpen = true;

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
  logout() {
    this.usersService.logout();
  }
}
