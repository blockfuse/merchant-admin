import {UsersService} from 'services/users';

export class Login {
  username = '';
  password = '';

  static inject = [UsersService];
  constructor(usersService) {
    this.usersService = usersService;
  }
  login() {
    return this.usersService.login(this.username, this.password).then(result => {
      if (result) {
        window.location.reload('#/');
      }
    }).catch(error => {
      this.errorMessage = error.content.message;
    });
  }
}
