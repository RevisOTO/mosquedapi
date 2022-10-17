const xp = require("express")
const pg = require("pg")

const conString = {
    user: 'postgres',
    host: 'localhost',
    database: 'apirest',
    password: 'admin',
    port: '5432'
}

var pgClient = new pg.Client(conString);

const app = xp()

app.use(xp.json())
app.use(xp.text())

app.get('/',function(req,res) {
    pgClient.connect()
    pgClient.query('SELECT * FROM persona WHERE idpersona =' + req.body)
    .then(response =>{
        console.log(response.rows)
        res.send(response.rows)
    })
})

app.listen(1234)