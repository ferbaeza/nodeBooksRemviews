const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete')


const UserScheme = new mongoose.Schema(
    {
        name:
        {
            type:String
        },
        username: 
        {
            type:String,
            required: true
        },
        email:
        {
            type:String,
            unique: true,
        },
        password:
        {
            type: String,
            required: true
        },
        role:
        {
            type:["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
);
UserScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const Users= mongoose.model("Users", UserScheme)
module.exports= Users 