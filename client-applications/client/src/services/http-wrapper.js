import {HttpClient} from 'aurelia-http-client';
import Config from '../../config.json!';

export class HttpWrapper {
  http;

  constructor() {
    const baseUrl = Config.baseUrl;

    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl(baseUrl);
      });
  }
  setHeader(header, value) {
    this.http.configure(x => {
      x.withHeader(header, value);
    });
  }
  get(path) {
    return this.http.get(path).then(result => {
      return result.content;
    });
  }
  post(path, body) {
    return this.http.post(path, body).then(result => {
      return result.content;
    });
  }
  put(path, body) {
    return this.http.put(path, body).then(result => {
      return result.content;
    });
  }
  patch(path, body) {
    return this.http.patch(path, body);
  }
  delete(path) {
    return this.http.delete(path);
  }
}
