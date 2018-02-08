//express work done: Post Put Delete

const express = require('express');
const router = express.Router();
const Articles = require('../db/articles')
// const helper = require('../helper')


const validReq = { "success": true };
const invalidReq = { "success": false };

// router.get('/new', (req, res) => {
//   return res.render('new');
//   console.log(Articles.getAll())
// })


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

module.exports = router;