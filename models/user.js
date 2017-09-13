const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    name: String,
    password: String,
    full_name: {type: String, default: ''},
    city: {type: String, default: ''},
    state: {type: String, default: ''}
});

userSchema.methods.pass_to_hash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.check_pass = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;


