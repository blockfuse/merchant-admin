import {Router} from 'aurelia-router';
import {DataStore} from 'services/data-store';
import {BalancesService} from 'services/balances';

export class Index {
  router;

  static inject = [DataStore, BalancesService];
  constructor(dataStore, balancesService) {
    this.dataStore = dataStore;
    this.balancesService = balancesService;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'manage'], name: 'manage', moduleId: './routes/manage', title: 'Manage Wallet' },
      { route: '/gateway', name: 'gateway', moduleId: './routes/gateway', title: 'Gateway' },
      { route: '/pay', name: 'pay', moduleId: './routes/pay', title: 'Pay' },
      { route: '/receive', name: 'receive', moduleId: './routes/receive', title: 'Receive' }
    ]);

    this.router = router;

    return this.balancesService.getBalances().then(balances => {
      this.dataStore.balances = balances;
    });
  }
}
