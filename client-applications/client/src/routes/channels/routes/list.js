import {DataStore} from 'services/data-store';

export class List {
  dataStore;

  static inject = [DataStore];
  constructor(dataStore) {
    this.dataStore = dataStore;
  }
}
