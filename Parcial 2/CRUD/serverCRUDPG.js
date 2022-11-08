const xp = require("express")
const pg = require("pg")
const cors = require("cors")

const conString = {
    user: 'postgres',
    host: 'localhost',
    database: 'apirest',
    password: 'admin',
    port: '5432'
}

var pgClient = new pg.Client(conString);

const app = xp()

app.use(cors({origin:"*"}))
// app.use(cors({origin:"*"}))
// app.use(cors({origin:"http://localhost/mosquedapi/Parcial%202/Gridjs/"}))

app.use(xp.json())
app.use(xp.text())
pgClient.connect()

app.get('/',function(req,res) {
    console.log(req.body.idpersona)
    if(req.body.idpersona == undefined)
    {
        console.log("si entra")
        pgClient.query('SELECT * FROM persona')
        .then(response =>{
            res.send(response.rows)
        })
    }
    else{
        pgClient.query('SELECT * FROM persona WHERE idpersona = '+ req.body.idpersona)
        .then(response =>{
            res.send(response.rows)
    })
    }
})

app.post('/',function(req,res){
    console.log(req.body)
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pgClient.query(`INSERT INTO persona(nombre,apellido) VALUES('${nombre}','${apellido}')`)
    .then(response =>{
        res.send("Se registro los datos")
    })
})

app.delete('/',function(req,res){
    let idpersona = req.body.idpersona 
    pgClient.query(`DELETE FROM persona WHERE idpersona = '${idpersona}'`)
    .then(response =>{
        res.send(`El registro con el id ${idpersona} se a eliminado`)
    })
})

app.patch('/',function(req,res){
    let idpersona = req.body.idpersona
    nombre = req.body.nombre
    apellido = req.body.apellido
    pgClient.query(`SELECT * FROM persona WHERE idpersona = '${req.body.idpersona}'`)
    .then(response =>{
        nombre = response.rows.nombre
        apellido = response.rows.apellido
    })
    pgClient.query(`UPDATE persona SET nombre='${nombre}',apellido='${apellido}' WHERE idpersona = '${idpersona}'`)
    .then(response =>{
        res.send(`El usuario con el id ${idpersona} se a actualizado`)
    })
})

app.listen(1234)