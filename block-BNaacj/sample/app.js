var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'mongoose is connected');
});

var app = express();

app.get('/', (req, res) => {
  res.send('welcome');
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
