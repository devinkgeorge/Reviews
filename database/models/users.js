const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    unique: true
  },
  username: {
    type: String,
    unique: true
  }
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
