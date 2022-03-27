require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
const path = require('path');



const app = express();
app.use(cors());
const port = process.env.PORT || 3001;


//********Routes*********/
app.use("/api", require("./routes"))


app.listen(port, ()=>{
    console.log('Server iniciado por el puerto: '+port);
})

dbConnect();