const express = require('express');
const knex = require('../knex/knex.js');
const handlebars = require('express-handlebars');
const router = express.Router();
const helpers = require('../helper')

router.get('/new', (req, res) => {
  return res.render('new');
})
  .get('/:id/edit', (req, res) => {
    let id = req.params.id;

    return knex('products')
      .where({ id: id })
      .select()
      .then(result => {
        if (result.length) {
          return result[0]
        } else {
          throw new Error('Product not found')
        }
      })
      .then(result => {
        res.render('edit', result)
      })
      .catch(err => {
        return res.redirect('/products')

      })
  })
  .get('/:id', (req, res) => {
    let id = req.params.id;

    return knex('products')
      .where({ id: id })
      .select()
      .then(result => {
        if (result.length) {
          return result[0]
        } else {
          throw new Error('Product not found')
        }
      })
      .then(result => {
        res.render('singleProduct', result)
      })
      .catch(err => {
        return res.redirect('/products')
      })
  })
  .get('/', (req, res) => {
    return knex('products')
      .select()
      .then(result => {
        console.log(result);
        return res.render('products', {db: result})
      })
  })

router.post('/', (req, res) => {
  let body = req.body

  const data = {
    name: body.name,
    price: body.price,
    inventory: body.inventory
  }
  const validate = helpers.validateProduct(data);

  if (validate === true) {
    return knex('products')
      .insert(data)
      .then(result => {
        res.redirect('/products')
      })
      .catch(err => {
        res.status(400).json({
          message: 'Cannot Get Request'
        })
      })
  } else {
    res.json('error');
    res.redirect('/products/new')
  }
})
router.put(`/:id`, (req, res) => {
  let id = req.params.id;
  let data = { name, price, inventory } = req.body;
    return knex('products')
    .where(`id`, id)
    .update({ name: data.name, price: data.price, inventory: data.inventory })
    .then(result => {
      return res.redirect(`/products/${id}`)
    })
  
  .catch(err => {
    return res.redirect(`products/${id}/edit`)
  })
})
.delete('/:id', (req, res) => {
  let id = req.params.id;

  return knex('products')
    .where({ id: id })
    .select()
    .then(result => {
      if(result.length) {
        return result;
      } else {
        throw new Error(`Product Not Found`)
      }
    }) 
    .then(result => {
      return knex(`products`)
      .delete()
      .where({id: id})
    })
    .then(result => {
      res.redirect(`/prodcuts`)
    })
    .catch(err => {
      res.redirect(`/products/${id}`)
    })
})
module.exports = router;