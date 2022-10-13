var pg = require('pg')
var j2x = require('json2xls')
var fs = require('fs')

const conString = {
  user: 'postgres',
  host: 'localhost',
  database: 'apirest',
  password: 'admin',
  port: '5432'
}

var pgClient = new pg.Client(conString);

pgClient.connect()

pgClient.query('SELECT * FROM persona')
  .then(response => {
    xls = JSON.stringify(response.rows)
    console.log(xls)
    // Esta hardcodeado porque al pasar la variable XLS no sirve pero ponerlo a mano si
    fs.writeFileSync(`${__dirname}/excel/dat.xlsx`, j2x([{"idpersona":1,"nombre":"Rafael","apellido":"Mosqueda"},
    {"idpersona":2,"nombre":"Fransisco","apellido":"Ortiz"},
    {"idpersona":3,"nombre":"Luis","apellido":"Soto"},
    {"idpersona":5,"nombre":"Rene","apellido":"Salinas"}]), 'binary')
    pgClient.end()
  })
  .catch(err => {
    console.log(err)
    pgClient.end()
  })