const express = require('express');

var app = express();

// app.get('/', (req, res) => {
//  res.status(200).send("Hello world");
// });

app.get('/', (req, res) => {
  res.status(404).send({
    error: "page not found",
    name: "Todo app v1.0"
  });
});

// GET /users
// give users a name and age property

app.get('/users', (req, res) => {
  res.status(200).send([
  {name: "sachin", age: 23},
  {name: "sanju", age: 16}
  ])
});

app.listen(3000);

module.exports.app = app;