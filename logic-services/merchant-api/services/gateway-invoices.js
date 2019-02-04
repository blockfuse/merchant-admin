const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const GatewayInvoice = db.GatewayInvoice;

module.exports = {
  getAll,
  getById,
  getByGatewayInvoiceId,
  getByDescription,
  create,
  update
};

async function getAll() {
  return await GatewayInvoice.find().select('-hash');
}

async function getById(id) {
  return await GatewayInvoice.findById(id);
}

async function getByGatewayInvoiceId(id) {
  return await GatewayInvoice.findOne({invoiceId: id});
}

async function getByDescription(description) {
  return await GatewayInvoice.findOne({description: description});
}

async function create(invoiceParam) {
  const invoice = new GatewayInvoice(invoiceParam);

  await invoice.save();

  return invoice;
}

async function update(id, invoiceParam) {
  const invoice = await GatewayInvoice.findById(id);

  if (!invoice) throw 'GatewayInvoice not found';

  Object.assign(invoice, invoiceParam);

  await invoice.save();

  return invoice;
}
