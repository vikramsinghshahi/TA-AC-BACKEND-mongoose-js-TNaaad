var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
  favorites: [String],
  marks: [Number],
});
