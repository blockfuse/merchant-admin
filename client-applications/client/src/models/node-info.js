import {NetworkInfo} from 'models/network-info';
import {WalletInfo} from 'models/wallet-info';

export class NodeInfo {
  networkInfo;
  walletInfo;

  type = 'node-info';

  constructor(data) {
    data.networkInfo = new NetworkInfo(data.networkInfo);
    data.walletInfo = new WalletInfo(data.walletInfo);

    Object.assign(this, data);
  }
}
