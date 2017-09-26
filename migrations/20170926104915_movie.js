
exports.up = (knex, Promise) => {
  return knex.schema.createTable('movie', (table) => {
    table.increments()
    table.string('title')
    table.integer('year')
    table.integer('director_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movie')
}
