import {Router} from 'aurelia-router';

export class Index {
  router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', title: 'Channels List' },
      { route: '/:channel', name: 'details', moduleId: './routes/details', title: 'Channel Details' }
    ]);

    this.router = router;
  }
}
