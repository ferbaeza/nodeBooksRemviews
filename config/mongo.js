const mongoose = require("mongoose");
//const DB_URI = require("./db_uri");mongoose
const DB_URI = process.env.DB_URI ;
const {username, password, cluster,dbname} = require('../config/data')

//TODO //adjuntar db_uri.js a .gitignore

/**
 * Conexion MongoDB Atlas
 */
    const dbConnect =()=>{
    // const username = "ferbaeza";
    //const username = process.env.USERNAME
    // const password = "D04qkq2ZjVNDkfwu";
    // const cluster = "cluster0.ima6j";
    // const dbname = "node";

    mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );
}


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
});






/*
const dbConnectOld =()=>{
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
*/
/**
 * Conexin con MongoDB
 */
/*
const dbConnectTest =()=>{
mongoose.connect('mongodb://127.0.0.1:27017/fbh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
}
*/


module.exports = dbConnect;