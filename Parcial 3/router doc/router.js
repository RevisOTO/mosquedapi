const xp = require("express")
const cors = require("cors")
const path = require("path")
const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Personas',
            version: '1.0.0',
        },
        servers: [{
            url: "http://localhost:1234"
        }],
    },
    apis: [`${path.join(__dirname,"./rutas/persona.js")}`],
};


const ruta = require('./rutas/persona')

const app = xp()

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(xp.text())
app.use(xp.json())
app.use(cors({origin:"http://localhost"}))

app.use("/persona", ruta.router)

app.listen(1234)