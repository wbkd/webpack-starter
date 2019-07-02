var express = require('express');
var router = express.Router();
var Food = require('../../../models/food')
var Meal = require('../../../models/meal')
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

router.get('/:id', async (req,res) => {
  // const food = await Food.query().findById(req.params.id).joinRelation(Meal)
  const food = await Food.query().findById(req.params.id)
  res.send(food)
})

router.post('/', async (req,res) => {
  const newFood = await Food.query()
    .insert({name: req.query.name, calories: req.query.calories})
  res.send(newFood)
})





module.exports = router;
