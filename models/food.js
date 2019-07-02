const knex = require('knex')({client: 'pg'})
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = knex(connection)

Model.knex(knexConnection)

class Food extends Model {
  static get tableName () {
    return 'foods'
  }
  static get relationMappings () {
    return {
      meals: {
        relation: Model.ManyToManyRelation,
        modelClass: Meal,
        join: {
          from: 'foods.id',
          through: {
            from: 'food_meals.food_id',
            to: 'food_meals.meal_id'
          },
          to: 'meals.id'
        }
      }
    }
  }
}

module.exports = Food
