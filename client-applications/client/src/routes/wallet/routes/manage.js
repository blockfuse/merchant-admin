import {DataStore} from 'services/data-store';

export class Manage {
  invoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
}
