const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola soy un server de express')
})

app.post('/', function (req, res) {
    res.send('Hola soy un server de express')
})

app.listen(8081)