export class WebSocketsService {
  subscribers = [];

  subscribe(subscription) {
    let newSubcriber = new Subscriber(subscription);
    this.subscribers.push(newSubcriber);
    return newSubcriber;
  }
  connect() {
    const secretKey = 'cnBjdXNlcjpycGNwYXNzd29yZA==';
    const url = `ws://localhost:3765?secret_key=${secretKey}`;

    this.socket = new WebSocket(url);

    this.socket.onmessage = (event) => {
      this.subscribers.forEach(subscriber => {
        subscriber.send(event.data);
      });
    }
  }
  unsubscribe(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  }
  disconnect() {
    this.socket.close();
    this.subscribers = [];
  }
}

export class Subscriber {
  constructor(subscription) {
    this.send = subscription;
  }
}
