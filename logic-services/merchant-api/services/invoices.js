const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const Invoice = db.Invoice;

module.exports = {
  getAll,
  getById,
  getByInvoiceId,
  create,
  update
};

async function getAll() {
  return await Invoice.find().select('-hash');
}

async function getById(id) {
  return await Invoice.findById(id);
}

async function getByInvoiceId(id) {
  return await Invoice.findOne({invoiceId: id});
}

async function create(invoiceParam) {
  const invoice = new Invoice(invoiceParam);

  await invoice.save();

  return invoice;
}

async function update(id, invoiceParam) {
  const invoice = await Invoice.findById(id);

  if (!invoice) throw 'Invoice not found';

  Object.assign(invoice, invoiceParam);

  await invoice.save();

  return invoice;
}
