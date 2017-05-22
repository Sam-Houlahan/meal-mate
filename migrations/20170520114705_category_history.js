
exports.up = function (knex, Promise) {
  return knex.schema.createTable('category_history', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('category')
    table.string('location')
    table.string('budget')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('category_history')
}
