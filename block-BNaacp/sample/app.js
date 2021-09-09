var express = require('express');
var mongoose = require('mongoose');

var Product = require('./models/product');

var User = require('./models/user');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'mongoose is connected');
});

var app = express();

//middleware

app.use(express.json());

app.post('/products', (req, res, next) => {
  console.log(req.body);
  //capture the data
  Product.create(req.body, (err, product) => {
    console.log(err);
    res.json(product);
  });
  //save the data to database
  //send response
});

app.post('/users', (req, res) => {
  console.log(req.body);

  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/products', (req, res) => {
  Product.find({}, (err, products) => {
    console.log(err);
    res.json({ products: products });
  });
});

app.get('/products/:id', (req, res) => {
  var id = req.params.id;
  console.log(id);

  Product.findById(id, (err, product) => {
    console.log(err);

    res.json(product);
  });
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
