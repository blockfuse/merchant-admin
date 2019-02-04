export class DataStore {
  channels = [];
  peers = [];
  invoices = [];
  gatewayInvoices = [];
  merchant;
  users = [];
  gatewayPeer;

  getPeerFromPublicKey(publicKey) {
    return this.peers.find(peer => {
      return peer.public_key.toLowerCase() === publicKey.toLowerCase();
    });
  }
  getInvoiceById(id) {
    return this.invoices.find(invoice => {
      return invoice.id.toLowerCase() === id.toLowerCase();
    });
  }
  getGatewayInvoiceById(id) {
    return this.gatewayInvoices.find(invoice => {
      return invoice.id.toLowerCase() === id.toLowerCase();
    });
  }
  getUserById(id) {
    return this.users.find(user => {
      return user.id.toLowerCase() === id.toLowerCase();
    });
  }
  getChannelsByPubkey(publicKey) {
    return this.channels.filter(channel => {
      return channel.partner_public_key.toLowerCase() === publicKey.toLowerCase();
    });
  }
}
