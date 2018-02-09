//express work done: Post Put Delete

const express = require('express');
const knex = require('../knex/knex.js');
const handlebars = require('express-handlebars');
const router = express.Router();

router.get('/new', (req, res) => {
  return res.render('new');
})


// router.get('/', (req, res) => {
//   return res.render('index', { Articles: Articles.getAll()});
//   console.log(Articles.getAll())
// })

//   .post('/', (req, res) => {
//     let validate = helper.validateArticle(req.body);
//     console.log('ll', validate);
//     if(validate) {
//       return res.redirect('/articles')
//     } else {
//       return res.redirect('/articles/new')
//     }
//   })

  // .put('/:id', (req, res) => {
  //   let id = req.params.id;
  //   let updatedItem = Articles.edit(id, req.body)
  //   console.log('lll', updatedItem)
  //   if (updatedItem) {
  //     res.redirect(`/articles/${req.params.id}`)
  //   } else {
  //     res.redirect(`/articles/${req.params.id}/edit`)
  //   }
  // })

  // .delete('/:id', (req, res) => {
  //   let id = req.params.id;
  //   let body = req.body;
  //   db.remove(id);
  //   res.end();
  // });


  // router.put('/:id', (req, res) => {
//     let data = {
//       name,
//       price,
//       inventory
//     } = req.body;
//     let productId = req.params.id;

//     return knex('products').where('id', productId).update({
//         name: data.name,
//         price: data.price,
//         inventory: data.inventory,
//       }, '*')
//       .then(result => {
//         return res.redirect(`/products/${productId}`);
//       })
//       .catch(err => {
//         return res.redirect(`/products/${productId}/edit`);
//       })
//   })



  // .delete('/:id', (req, res) => {
  //   let productId = req.params.id;

  //   return knex('products')
  //     .where({
  //       id: productId
  //     })
  //     .select()
  //     .then(result => {
  //       if (result.length) {
  //         return result;
  //       } else {
  //         throw new Error('Product not found in database')
  //       }
  //     })
  //     .then(result => {
  //       knex('products')
  //         .delete()
  //         .where({
  //           id: productId
  //         })
  //         .then(result => {
  //           res.redirect(`/products`)
  //         })
  //     })
  //     .catch(err => {
  //       res.redirect(`/products/${productId}`)
  //     })
  // })

module.exports = router;