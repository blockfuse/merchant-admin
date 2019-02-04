import {HttpWrapper} from './http-wrapper';
import {DataStore} from './data-store';
import {User} from 'models/user';

const itemName = 'merchant-admin:user';

export class UsersService {
  static inject = [HttpWrapper, DataStore];
  constructor(http, dataStore) {
    this.http = http;
    this.dataStore = dataStore;
  }

  login(username, password) {
    const payload = { username, password };

    return this.http.post('/users/authenticate', payload).then(user => {
      if (user.token) {
        localStorage.setItem(itemName, JSON.stringify(user));
      }
      this.setHeader(user.token);

      return new User(user);
    });
  }
  register(user) {
    return this.http.post('/users/register', user).then(result => {
      return new User({ user: result.result });
    });
  }
  logout() {
    localStorage.removeItem(itemName);

    window.location.reload(true);
  }
  getUsers() {
    return this.http.get('/users').then(result => {
      return result.map(user => {
        const newUser = new User(user);
        if (newUser.merchant) {
          const merchant = this.dataStore.getMerchantById(newUser.merchant);
          newUser.setMerchant(merchant);
        }
        return newUser;
      });
    });
  }
  getUser() {
    let user = localStorage.getItem(itemName);
    if (user) {
      return JSON.parse(user);
    }
  }
  getToken() {
    return this.http.get('/users/token').then(result => {
      return result;
    });
  }
  approve(user) {
    user.isApproved = true;
    return this.update(user);
  }
  setMerchant(user, merchant) {
    user.merchant = merchant;
    return this.update(user);
  }
  update(user) {
    return this.http.put(`/users/${user.id}`, user).then(result => {
      return result;
    });
  }
  setHeader(token) {
    this.http.setHeader('Authorization', `Bearer ${token}`);
  }
}
