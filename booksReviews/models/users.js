const mongoose = require("mongoose")

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
module.exports = mongoose.model("Users", UserScheme)