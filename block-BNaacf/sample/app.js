var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'mongoose is connected');
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
