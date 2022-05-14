require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
const path = require('path');
const app = express();


const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

/**
 * API - Documentation
 */
 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * Gracias a dotenv podemos utilizar os archivos de configuracion de
 * nuestra app, declarar las constantes y asi proteger nuestros datos de bbdd
 * @params en caso de que falle nuestra constante PORT
 * * le asignamos un valor secundario
 */
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static('storage'))

/**
 * Es necesario declarar el uso de cores en express para el acceso a la API
 * @params express.json() lo necesitamos para poder realizar los registros a traves
 * de nuestra ruta post
 */

/**
 * * **Invocamos a las **Routes*** 
 */

app.use("/api", require("./routes"))


app.listen(port, ()=>{
    console.log('Server iniciado por el puerto: '+port);
})

dbConnect();