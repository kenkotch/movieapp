
exports.up = (knex, Promise) => {
  return knex.schema.createTable('director', (table) => {
    table.increments()
    table.string('name')
    table.string('nationality')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('director')
}
