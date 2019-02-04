import {bindable, containerless} from 'aurelia-templating';
import {UsersService} from 'services/users';
import {User} from 'models/user';

@containerless
export class CreateUser {
  @bindable user = new User();

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }

  createUser() {
    return this.usersService.register(this.user).then(result => {
      console.log('-'.repeat(100))
      console.log(result)
    });
  }
}
