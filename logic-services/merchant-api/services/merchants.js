const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const Merchant = db.Merchant;

module.exports = {
  getMerchant,
  create,
  update
};

async function getMerchant() {
  return await Merchant.findOne();
}

async function create(merchantParam) {
  if (await Merchant.findOne({ name: merchantParam.name })) {
    throw 'Merchantname "' + merchantParam.name + '" is already taken';
  }

  const merchant = new Merchant(merchantParam);

  await merchant.save();
  return merchant;
}

async function update(id, merchantParam) {
  const merchant = await Merchant.findById(id);

  if (!merchant) throw 'Merchant not found';

  Object.assign(merchant, merchantParam);

  await merchant.save();
}
