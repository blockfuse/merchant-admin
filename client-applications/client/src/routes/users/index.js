import {Router} from 'aurelia-router';
import {UsersService} from 'services/users';
import {DataStore} from 'services/data-store';

export class Index {
  router;

  static inject = [UsersService, DataStore];
  constructor(usersService, dataStore) {
    this.usersService = usersService;
    this.dataStore = dataStore;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', title: 'Users List' },
      { route: '/:user_id', name: 'details', moduleId: './routes/details', title: 'User Details' },
    ]);

    this.router = router;

    return this.usersService.getUsers().then(users => {
      this.dataStore.users = users;
    });
  }
}
