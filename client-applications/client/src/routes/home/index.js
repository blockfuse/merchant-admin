import {DataStore} from 'services/data-store';

export class Index {
  dataStore;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
}
