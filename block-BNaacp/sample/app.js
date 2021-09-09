var express = require('express');
var mongoose = require('mongoose');

var User = require('./models/user');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'mongoose is connected');
});

var app = express();

//middleware

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);

  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

// app.get('/users/:id', (req, res) => {
//   var id = req.params.id;
//   User.findById(id, (err, user) => {
//     console.log(err);
//     res.json(user);
//   });
// });

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findOne({ _id: id }, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;

  User.findByIdAndDelete(id, (err, user) => {
    if (err) console.log(err);
    res.send('user deleted');
  });
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
