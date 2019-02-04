import {DataStore} from 'services/data-store';

export class Pay {
  invoice;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
}
