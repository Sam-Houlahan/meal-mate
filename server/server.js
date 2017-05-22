var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var router = require('../routes/routes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', router)

module.exports = function (connection) {
  server.set('connection', connection)
  return server
}
