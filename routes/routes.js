const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  db.addUser(req.server.get('connection'), email, password)
  .then(() => {
    res.redirect('/')
  })
})

router.post('/login'), (req, res) => {
  db.getUser(req.server.get('connection'))
  .then(() => {
    res.redirect('/')
  })
}

router.get('/category_history/:id'), (req, res) => {

}

router.get('/restaurant_history/:id'), (req, res) => {

}

router.post('/category_history/:id'), (req, res) => {

}

router.post('/restaurant_history/:id'), (req, res) => {

}
module.exports = router
