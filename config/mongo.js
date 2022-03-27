const mongoose = require("mongoose");
const DB_URI = require("./db_uri");

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