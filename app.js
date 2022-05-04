require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
const path = require('path');
const app = express();

/**
 * Gracias a dotenv podemos utilizar os archivos de configuracion de
 * nuestra app, declarar las constantes y asi proteger nuestros datos de bbdd
 * @params en caso de que falle nuestra constante PORT
 * * le asignamos un valor secundario
 */
const port = process.env.PORT || 5000;


/**
 * Es necesario declarar el uso de cores en express para el acceso a la API
 * @params express.json() lo necesitamos para poder realizar los registros a traves
 * de nuestra ruta post
 */
app.use(cors());
app.use(express.json());

/**
 * * **Invocamos a las **Routes*** 
 */

app.use("/api", require("./routes"))


app.listen(port, ()=>{
    console.log('Server iniciado por el puerto: '+port);
})

dbConnect();