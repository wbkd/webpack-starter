
const knex = require('knex')({client: 'pg'})

const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = knex(connection)

Model.knex(knexConnection)

class Meal extends Model {
  static get tableName () {
    return 'meals'
  }
  static get relationMappings () {
    return {
      foods: {
        relation: Model.ManyToManyRelation,
        modelClass: Food,
        join: {
          from: 'meals.id',
          through: {
            from: 'food_meals.meal_id',
            to: 'food_meals.food_id'
          },
          to: 'food.id'
        }
      }
    }
  }
}

module.exports = Meal
