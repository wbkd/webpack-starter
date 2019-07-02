const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);


var indexRouter = require('./routes/index');
var foodsRouter = require('./routes/api/v1/foods');
var mealsRouter = require('./routes/api/v1/meals');

app.use('/', indexRouter);
app.use('/api/v1/foods', foodsRouter);
app.use('/api/v1/meals', mealsRouter);


app.get('/api/v1/foods', (req,res) => {
  database('foods').select()
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = app;
