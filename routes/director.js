var express = require('express');
var router = express.Router();
const knex = require('../knex')

// C
router.post('/', (req, res, next) => {
  knex('director')
    .insert({
      name: req.body.name,
      nationality: req.body.nationality
    },'id')
    .then((items) => {
      if (!req.body.name || !req.body.nationality) {
        res.sendStatus(400)
      }
      console.log(items)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
})

// R
router.get('/:id', function(req, res, next) {
  let itemId = req.params.id
  knex('director')
    .select('name', 'nationality')
    .orderBy('name', 'asc')
    .where('id', itemId)
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
    .catch((err) => next(err))
});

// U
router.patch('/:id', (req, res, next) => {
  // let update = req.body
  let updateId = req.params.id

  knex('director')
    .where('id', updateId)
    .update({
      name: req.body.name,
      nationality: req.body.nationality,
    })
    .then((rowsAffected) => {
      if (rowsAffected !== 1) {
          return res.sendStatus(404)
    }
      res.send(JSON.stringify(rowsAffected[0]))
    })
    .catch((err) => next(err))
})

// D
router.delete('/:id', (req, res, next) => {
  let delItem = req.params.id
  knex('director')
    .del()
    .where('id', delItem)
    .then((rowsAffected) => {
      if (rowsAffected !== 1) {
        return res.sendStatus(404)
      }
      console.log('you deleted', delItem)
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

// L
router.get('/', function(req, res, next) {
    knex('director')
      .select('name', 'nationality')
      .orderBy('name', 'asc')
      .then((items) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(items))
      })
      .catch((err) => next(err))

});

module.exports = router;
