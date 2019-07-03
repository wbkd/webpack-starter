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
  if (foods) {
    res.send(foods)
  }
  else {
    res.status(404).json({
      error: "No foods here yet!"
    })
  }
})

router.get('/:id', async (req,res) => {
  // const food = await Food.query().findById(req.params.id).joinRelation(Meal)
  const food = await Food.query().findById(req.params.id)
  if (food) {
    res.send(food)
  }
  else {
    res.status(404).json({
      error: "No food exists with that ID"
    })
  }
})

router.post('/', async (req,res) => {
  const newFood = await Food.query()
    .insert({name: req.query.name, calories: req.query.calories})
  res.send(newFood)
})

router.patch('/:id', async (req,res) => {
  const editedFood = await Food.query()
    .patchAndFetchById(req.params.id, req.query)
  if (editedFood) {
    res.send(editedFood)
  }
  else {
    res.status(404).json({
      error: "No food exists with that ID"
    })
  }
})

router.delete('/:id', async (req,res) => {
  const deletedFood = await Food.query()
    .findById(req.params.id)
  if (deletedFood) {
    await Food.query().findById(req.params.id).delete()
    res.send(`${deletedFood.name} has been deleted.`)
  }
  else {
    res.status(404).json({
      error: "No food exists with that ID"
    })
  }
})




module.exports = router;
