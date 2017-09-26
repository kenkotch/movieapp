
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        { id: 1, title: 'Hello World', year: '1986', director_id: 2 },
        { id: 2, title: 'Star Wars', year: '1974', director_id: 3 },
        { id: 3, title: 'Mad Max', year: '1843', director_id: 4 },
        { id: 4, title: 'Blade Runner', year: '2034', director_id: 1 }
    ])
})
}
