const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log(req.server)
  db.addUser(req.server.get('connection'), email, password)
  .then(() => {
    res.redirect('/')
  })
})

module.exports = router
