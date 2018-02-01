//express work done: Post Put Delete

const express = require('express');
const router = express.Router();
const db = require('../db/products')

router.use((req, res, next) => {
  console.log(`In User Route ${Date.now()}`)
  next();
})

router.get('/', (req, res) => {
  res.send('get request');
})

module.exports = router;