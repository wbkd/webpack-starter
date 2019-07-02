var express = require('express');
var router = express.Router();
var Food = require('../../../models/food')
// var Meal = require('../../../models/meal')
var foodsController = require('../../../controllers/api/v1/foods_controller.js');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);
var pry = require('pryjs');

const { Model } = require('objection');
Model.knex(database)

router.get('/', async (req,res) => {
  const foods = await Food.query()
  res.send(foods)
})


router.post('/', (req,res) => {
  eval(pry.it)
  database('foods').insert({name: req.query.name, calories: req.query.calories})
    .then()
})




module.exports = router;
