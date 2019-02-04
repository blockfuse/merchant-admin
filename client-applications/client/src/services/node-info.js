import {HttpWrapper} from './http-wrapper';
import {NodeInfo} from 'models/node-info';

export class NodeInfoService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getNodeInfo() {
    return this.http.get(`/node-info`).then(result => {
      return new NodeInfo(result);
    });
  }
}
