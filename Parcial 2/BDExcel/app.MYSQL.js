var sql = require('mysql')
var j2x = require('json2xls')
var fs = require('fs')

var con = sql.createConnection({
    host: "localhost",
    database: "apirest",
    user: "root",
    password: ""
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    sqlQuery = 'SELECT * FROM usuario'

    con.query(sqlQuery, function (err, response) {
      console.log(response)
      if (err) throw err;
      fs.writeFileSync(`${__dirname}/excel/dat.xlsx`, j2x(response), 'binary')
      con.end()
    })
  })