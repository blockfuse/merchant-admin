const axios = require('axios');
const baseUrl = require('../config.json').paymentGatewayBaseUrl;

const paymentGatewayToken = process.env.PAYMENT_GATEWAY_TOKEN;

if (!paymentGatewayToken) {
  throw new Error('Error: No PAYMENT_GATEWAY_TOKEN found.');
}

class GatewayApiService {
  requestInvoice(invoiceRequest) {
    const url = `${baseUrl}/invoices/`;
    const body = JSON.stringify(invoiceRequest);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${paymentGatewayToken}`
    };

    return axios.post(url, body, {headers: headers}).then(result => {
      return result.data;
    }).catch(error => {
      console.error('!'.repeat(100))
      console.error(error)
      throw new Error(error);
    });
  }
  getExchangeRate(pair) {
    const url = `${baseUrl}/exchange-rates/${pair}`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${paymentGatewayToken}`
    };

    return axios.get(url, {headers: headers}).then(result => {
      console.log(result.data)
      return result.data;
    }).catch(error => {
      console.error('!'.repeat(100))
      console.error(error)
      throw new Error(error);
    });
  }
}

module.exports = GatewayApiService;
