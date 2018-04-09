'use strict'
const mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  username: String,
  createdOn: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = UsersSchema;
