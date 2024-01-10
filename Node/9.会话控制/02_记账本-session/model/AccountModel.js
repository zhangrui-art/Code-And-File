const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time: Date,
  type: {
    type: Number,
    required: true,
  },
  amount: Number,
  remark: String
})

const AccountModel = mongoose.model('accounts', AccountSchema)
module.exports = AccountModel
