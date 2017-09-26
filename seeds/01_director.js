
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {id: 1, name: 'Bob', nationality: 'German'},
        {id: 2, name: 'Jane', nationality: 'Aussie'},
        {id: 3, name: 'Chris', nationality: 'Mexican'},
        {id: 4, name: 'Francesca', nationality: 'Italian'}
      ])
    })
}
