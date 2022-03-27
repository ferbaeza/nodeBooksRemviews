require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
const path = require('path');



const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log('Server iniciado por el puerto: '+port);
})

console.log(process.env.DB_URI)
dbConnect();