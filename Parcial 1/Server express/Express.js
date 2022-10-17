const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path  = require('path')

const { json } = require('express')

const app = express()

app.use(cors({origin:"http://localhost"}))
app.use(express.text())
app.use(express.json())

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.use((req,res,next) =>{
  console.log("Primera Funcion MiddleWare")
  next()
},(req,res,next)=>{
  console.log("Segunda Funcion MiddleWare")
  next()
})

app.get('/', function (req, res) {

  res.sendFile("./static/index.html",{root:__dirname})
})
app.post('/', function (req, res) {
  res.json({usuario:"rafael"})
  res.send('Hola soy un server de express')
})

app.post('/texto',(req,res) => {
  console.log(req.body)
  let may = cadena.Mayuscula(req.body)
  let sinesp = cadena.SinEspacios(req.body)
  let long = cadena.Longitud(req.body)

  // let may = req.body.toUpperCase()
  // let sinesp = req.body.trim()
  // let long = req.body.length

  res.json({
    Mayuscula: may,
    Sin_Espacios: sinesp,
    Longitud: long
  })
})

app.post('/json',(req,res) =>{
  console.log(req.body.nombre)
  let cadena = "Hola " + req.body.nombre + " " + req.body.apellido + " como estas"
  res.json({saludo:cadena})
})

app.post('/Mayuscula/:cadena',(req,res) =>{
  console.log(req.params)
  res.send(req.params)
})

app.post('/suma',(req,res) =>{
  console.log(req.query)
  let suma = parseInt(req.query.x) + parseInt(req.query.y)
  console.log(suma)
  res.send('La suma ' + suma)
})

app.use(function (req, res) {
  res.status(404).sendFile("./static/404.html",{root:__dirname})
})
app.listen(8081)