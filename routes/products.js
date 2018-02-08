//express work done: Post Put Delete

const express = require('express');
const router = express.Router();
const db = require('../db/products')
const helper = require('../helper')


const validReq = { "success": true };
const invalidReq = { "success": false };

router.get('/new', (req, res) => {
  return res.render('new');
  console.log(db.getAll())
})

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  let elementIndex = db.find(id);
  return res.render('edit', elementIndex);
  console.log(db.find(id))
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let elementIndex = db.find(id);
  res.render('singleProduct', elementIndex)
})

router.get('/', (req, res) => {
  console.log(db.getAll())
  return res.render('products', { db: db.getAll() });

})

  .post('/', (req, res) => {
    let validate = helper.validateProduct(req.body);
    console.log('ll', validate);
    if (validate) {
      if (db.create(req.body)) {
        return res.redirect('/products')
      }
    } else {
      return res.redirect('/products/new')
    }
  })

  .put('/:id/edit', (req, res) => {
    let id = req.params.id;
    let updatedItem = db.edit(id, req.body)
    if (updatedItem) {
      res.redirect(`/products`)
    } else {
      res.redirect(`/products/${id}/edit`)
    }
  })

  .delete('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    if (db.remove(id)) {
      res.redirect('/products');
    } else {
      res.redirect('/products/:id')
    }
  });

module.exports = router;