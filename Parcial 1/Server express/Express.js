const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({origin:"http://localhost"}))

app.get('/', function (req, res) {

  res.sendFile("./static/index.html",{root:__dirname})
})
app.post('/', function (req, res) {
  res.json({usuario:"rafael"})
  res.send('Hola soy un server de express')
})

app.use(function (req, res) {
  res.status(404).sendFile("./static/404.html",{root:__dirname})
})
app.listen(8081)