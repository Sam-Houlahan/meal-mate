
exports.up = function (knex, Promise) {
  return knex.schema.createTable('restaurant_history', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('restaurant')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('restaurant_history')
}
