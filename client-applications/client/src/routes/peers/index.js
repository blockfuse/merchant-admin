import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', title: 'Peers List' },
      { route: '/:public_key', name: 'details', moduleId: './routes/details', title: 'Peer Details' },
    ]);

    this.router = router;
  }
}
