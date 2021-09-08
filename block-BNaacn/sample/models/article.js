var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  description: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});
