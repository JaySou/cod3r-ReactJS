const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const queryParser = require('express-query-int')

const server = express()

server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is runing on port ${port}`)
})

module.exports = server