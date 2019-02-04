import {UsersService} from 'services/users';
import {DataStore} from 'services/data-store';
import {PeersService} from 'services/peers';
import {MerchantsService} from 'services/merchants';
import {ChannelsService} from 'services/channels';
import {WebSocketsService} from 'services/web-sockets';
import {ToastMessagesService} from 'services/toast-messages';

export class App {
  static inject = [DataStore, UsersService, PeersService, MerchantsService, ChannelsService, WebSocketsService, ToastMessagesService];
  constructor(dataStore, usersService, peersService, merchantsService, channelsService, webSocketsService, toastMessagesService) {
    this.dataStore = dataStore;
    this.usersService = usersService;
    this.peersService = peersService;
    this.merchantsService = merchantsService;
    this.channelsService = channelsService;
    this.webSocketsService = webSocketsService;
    this.toastMessagesService = toastMessagesService;
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Merchant Admin';

    const user = this.usersService.getUser();

    if (!user) {
      config.map([
        {
          route: ['', 'login'],
          name: 'login',
          moduleId: 'routes/accounts/login',
          title: 'Login'
        }, {
          route: 'register',
          name: 'register',
          moduleId: 'routes/accounts/register',
          title: 'Register'
        }
      ]);

      config.mapUnknownRoutes('routes/accounts/login');
      return;
    }

    this.usersService.setHeader(user.token);

    const channelsPromise = this.channelsService.getChannels().then(channels => {
      this.dataStore.channels = channels;
    });

    const peersPromise = this.peersService.getPeers().then(peers => {
      this.dataStore.peers = peers;
    });

    const merchantsPromise = this.merchantsService.getMerchant().then(merchant => {
      this.dataStore.merchant = merchant;

      config.map([
        {
          route: ['', 'home'],
          name: 'home',
          moduleId: 'routes/home/index',
          nav: true,
          title: 'Dashboard',
          settings: {
            icon: 'fa fa-address-card-o'
          }
        }, {
          route: 'history',
          name: 'history',
          moduleId: 'routes/history/index',
          nav: true,
          title: 'Transactions & History',
          settings: {
            icon: 'fa fa-list'
          }
        }, {
          route: 'invoices',
          name: 'invoices',
          moduleId: 'routes/invoices/index',
          nav: true,
          title: 'Invoicing',
          settings: {
            icon: 'fa fa-money'
          }
        }, {
          route: 'gateway-invoices',
          name: 'gateway-invoices',
          moduleId: 'routes/gateway-invoices/index',
          nav: false,
          title: 'Gateway Invoices'
        }, {
          route: 'wallet',
          name: 'wallet',
          moduleId: 'routes/wallet/index',
          nav: true,
          title: 'Gateway & Wallet',
          settings: {
            icon: 'fa fa-object-group'
          }
        }, {
          route: 'merchant-details',
          name: 'merchant-details',
          moduleId: 'routes/merchants/details',
          nav: true,
          title: 'Info & Settings',
          settings: {
            icon: 'fa fa-cog'
          }
        }, {
          route: 'users',
          name: 'users',
          moduleId: 'routes/users/index',
          nav: true,
          title: 'Users',
          settings: {
            icon: 'fa fa-user'
          }
        }, {
          route: 'channels',
          name: 'channels',
          moduleId: 'routes/channels/index',
          title: 'Channels'
        }, {
          route: 'peers',
          name: 'peers',
          moduleId: 'routes/peers/index',
          title: 'Peers'
        }
      ]);
      config.mapUnknownRoutes('routes/home/index');
    });

    return Promise.all([channelsPromise, peersPromise, merchantsPromise]).then(() => {
      if (this.dataStore.merchant) {
        this.dataStore.gatewayPeer = this.dataStore.getPeerFromPublicKey(this.dataStore.merchant.pubkey);
      }
      this.webSocketsService.connect();
      this.webSocketsService.subscribe(data => {
        if (data) {
          console.log('='.repeat(100))
          console.log(data)
          this.toastsMessagesService.showMessage(data);
        }
      });
    });
  }
}
