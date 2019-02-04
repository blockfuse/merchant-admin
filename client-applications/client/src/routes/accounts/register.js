import {UsersService} from 'services/users';
import {User} from 'models/user';
import {Router} from 'aurelia-router';

export class Register {
  firstName = '';
  lastName = '';
  username = '';
  password = '';

  static inject = [UsersService, Router];
  constructor(usersService, router) {
    this.usersService = usersService;
    this.router = router;
  }
  register() {
    const user = new User({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password
    });

    return this.usersService.register(user).then(result => {
      this.router.navigateToRoute('login');
    });
  }
}
