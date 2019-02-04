const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pubkey: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Merchant', schema);
