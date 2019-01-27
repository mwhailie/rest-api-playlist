const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required:[true, 'Name required']
  },
  age: {
    type: Number
  },
  gender: {
    type: Boolean,
    default: false
  }
  //address
});
//create user model
const User = mongoose.model('user', UserSchema);

module.exports = User;
