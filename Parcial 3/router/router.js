const xp = require("express")
const cors = require("cors")

const ruta = require('./persona')

const app = xp()

app.use(xp.text())
app.use(xp.json())
app.use(cors({origin:"http://localhost"}))

app.use("/persona", ruta.router)

app.listen(1234)