const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Message', messageSchema);