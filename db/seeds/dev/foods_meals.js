// const foodData = require('../../../data/food');
// const mealData = require('../../../data/meal');

let foodData = [
  {id: 1,
    name: 'cheese',
    calories: 113},
  {id: 2,
    name: 'apple',
    calories: 95},
  {id: 3,
    name: 'turkey',
    calories: 22},
  {id: 4,
    name: 'grapes',
    calories: 62},
  {id: 5,
    name: 'roll',
    calories: 77},
  {id: 6,
    name: 'gushers',
    calories: 90},
  {id: 7,
    name: 'carrots',
    calories: 25},
  {id: 8,
    name: 'egg',
    calories: 78},
]

let foodMealData = [
  {food_id: 2,
    meal_id: 1},
  {food_id: 8,
    meal_id: 1},
  {food_id: 8,
    meal_id: 1},
  {food_id: 1,
    meal_id: 2},
  {food_id: 3,
    meal_id: 2},
  {food_id: 4,
    meal_id: 2},
  {food_id: 5,
    meal_id: 2},
  {food_id: 7,
    meal_id: 3},
  {food_id: 1,
    meal_id: 4},
  {food_id: 3,
    meal_id: 4},
  {food_id: 5,
    meal_id: 4},
  {food_id: 7,
    meal_id: 4},
  {food_id: 6,
    meal_id: 5}
]

let mealData = [
  {id: 1,
  name: 'breakfast'},
  {id: 2,
  name: 'lunch'},
  {id: 3,
  name: 'snack'},
  {id: 4,
  name: 'dinner'},
  {id: 5,
  name: 'dessert'}
]

const createFood = (knex,food) => {
  return knex('foods').insert({
    name: food.name,
    calories: food.calories
  })
}

const createFoodMeal = (knex,foodMeal) => {
  return knex('food_meals').insert({
    food_id: foodMeal.food_id,
    meal_id: foodMeal.meal_id
  })
}

const createMeal = (knex,meal) => {
  return knex('meals').insert({
    name: meal.name
  })
}
var pry = require('pryjs');
exports.seed = function(knex) {
  return knex('food_meals').del()
    .then(() => knex('meals').del())
    .then(() => knex('foods').del())
    .then(() => {
      let promises = []

      foodData.forEach(food => {
        promises.push(createFood(knex,{
          id: food.id,
          name: food.name,
          calories: food.calories
        }))
      });

      mealData.forEach(meal => {
        promises.push(createMeal(knex,{
          id: meal.id,
          name: meal.name
        }))
      });

      foodMealData.forEach(foodMeal => {
        promises.push(createFoodMeal(knex,{
          food_id: foodMeal.food_id,
          meal_id: foodMeal.meal_id
        }))
      });

      return Promise.all(promises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
