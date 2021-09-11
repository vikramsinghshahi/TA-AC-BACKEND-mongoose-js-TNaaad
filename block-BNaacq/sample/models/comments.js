var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectID, required: true },
    article: { type: Schema.Types.ObjectID, required: true },
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
