var mongoose = require('mongoose');
const { modelName } = require('./articles');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
