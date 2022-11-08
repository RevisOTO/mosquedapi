const xp = require("express")
const sql = require("mysql2")

var pool = sql.createPool({
    host: "localhost",
    database: "apirest",
    user: "root",
    password: ""
  });

const app = xp()

app.use(xp.json())
app.use(xp.text())

app.get('/',function(req,res) {
    console.log(req.body)
    if(req.body.idusuario == undefined)
    {
        pool.query('SELECT * FROM usuario',function(err,response,fields){
            res.send(JSON.stringify(response))
        })
    }
    else{
        pool.query('SELECT * FROM usuario WHERE idusuario =' + req.body, function(){
            res.send(JSON.stringify(response))
        })
    }
})

app.post('/',function(req,res){
    console.log(req.body)
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pool.query(`INSERT INTO usuario(nombre,apellido) VALUES('${nombre}','${apellido}')`,function(err,response,fields){
        res.send("Se registro los datos")
    })
})

app.delete('/',function(req,res){
    let idusuario = req.body.idusuario 
    pool.query(`DELETE FROM usuario WHERE idusuario = '${idusuario}'`,function(err,response,fields){
        res.send(`El registro con el id ${idusuario} se a eliminado`)
    })
})

app.patch('/',function(req,res){
    let idusuario = req.body.idusuario
    nombre = req.body.nombre
    apellido = req.body.apellido
    pool.query(`SELECT * FROM usuario WHERE idusuario = '${req.body.idusuario}'`,function(err,response,fields){
        nombre = response.nombre
        apellido = response.apellido
    })

    pool.query(`UPDATE usuario SET nombre='${nombre}',apellido='${apellido}' WHERE idusuario = '${idusuario}'`,function(err,response,fields){
        res.send(`El usuario con el id ${idusuario} se a actualizado`)
    })
})

app.listen(1234)