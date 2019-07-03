const express = require("express");
const fetch = require('node-fetch');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);
var Food = require('../../../models/food')
var Meal = require('../../../models/meal')
var pry = require('pryjs');

async function index(req,res) {
  try {
    const foods = await Food.query()
    if (foods) {
      res.send(foods)
    }
    else {
      res.status(404).json({
        error: "No foods here yet!"
      })
    }
  } catch (error) {
      res.status(404).json({ error });
    };
}

async function show(req,res) {
  try {
    const food = await Food.query().findById(req.params.id)
    if (food) {
      res.send(food)
    }
    else {
      res.status(404).json({
        error: "No food exists with that ID"
      })
    }
  } catch (error) {
      res.status(404).json({ error });
    };
}

async function create(req,res) {
  try {
    const newFood = await Food.query()
    .insert({name: req.query.name, calories: req.query.calories})
    res.send(newFood)
  } catch (error) {
      res.status(404).json({ error });
    };
}

async function update(req,res) {
  try {
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
  } catch (error) {
      res.status(404).json({ error });
    };
}

async function destroy(req,res) {
  try {
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
  } catch (error) {
      res.status(404).json({ error });
    };
}


module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}
