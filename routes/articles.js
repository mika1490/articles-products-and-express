//express work done

const express = require('express');
const router = express.Router();
const db = require('../db/articles')

router.use((req, res, next) => {
  console.log(`In User Route ${Date.now()}`)
  next();
})

.get('/', (req, res) => {
  res.send('get request');
})
.post('/', (req, res) => {

})

module.exports = router;