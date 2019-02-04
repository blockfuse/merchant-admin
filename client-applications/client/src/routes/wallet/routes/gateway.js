import {DataStore} from 'services/data-store';

export class Gateway {
  invoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
}
