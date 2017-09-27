var express = require('express');
const knex = require('../knex')
var router = express.Router();

// C
router.post('/', (req, res, next) => {

  knex('movie')
    .insert({
      title: req.body.title,
      year: req.body.year,
      director_id: req.body.director_id
    },'id')
    .then((items) => {
      if (!req.body.title || !req.body.year) {
        res.sendStatus(400)
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
})

// R
router.get('/:id', function(req, res, next) {
  let id = Number(req.params.id)
  knex('movie')
    .select('title', 'year')
    .orderBy('title', 'asc')
    .where('id', id)
    .then((items) => {
      if (!id) {
        res.sendStatus(400)
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
    .catch((err) => next(err))
});

// U
router.patch('/:id', (req, res, next) => {
  // let update = req.body
  let updateId = req.params.id

  knex('movie')
    .where('id', updateId)
    .update({
      title: req.body.title,
      year: req.body.year,
      director_id: req.body.director_id
    })
    .then((rowsAffected) => {
      if (rowsAffected !== 1) {
          return res.sendStatus(404)
    }
      // res.sendStatus(200)
      res.send(JSON.stringify(rowsAffected[0]))
    })
    .catch((err) => next(err))
})

// D
router.delete('/:id', (req, res, next) => {
  let delItem = req.params.id
  knex('movie')
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
  knex('movie')
    .select('title', 'year')
    .orderBy('title', 'asc')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch((err) => next(err))
});

module.exports = router;
