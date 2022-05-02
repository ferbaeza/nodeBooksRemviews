const mongoose = require("mongoose");
const DB_URI = require("./db_uri");

//const DB_URI = process.env.DB_URI ;
//TODO //adjuntar db_uri.js a .gitignore

const dbConnect =()=>{
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    },(err, res)=>{
        if(!err){
            console.log("***Conexion Mongoose OK***");
        }else{
            console.log("**KO**, algo ha ido mal=> Conexion BBDD");
        }
    });
}
module.exports = dbConnect;