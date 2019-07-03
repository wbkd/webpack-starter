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
  foodsController.index(req,res)
})

router.get('/:id', async (req,res) => {
  foodsController.show(req,res)
})

router.post('/', async (req,res) => {
  foodsController.create(req,res)
})

router.patch('/:id', async (req,res) => {
  foodsController.update(req,res)
})

router.delete('/:id', async (req,res) => {
  foodsController.destroy(req,res)
})

module.exports = router;
