var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
  address: {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Object,
  },
});
