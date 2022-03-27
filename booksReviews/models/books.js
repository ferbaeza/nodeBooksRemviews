const mongoose = require("mongoose")

const BookScheme = new mongoose.Schema(
    {
        title:
        {
            type:String,
            required: true
        },
        author: 
        {
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nacionalidad:{
                type: String
            },
        },
        editorial:
        {
            type:String,
            unique: false,
        },
        synopsis:
        {
            type: String,
            required: true
        },
        isbn:
        {
            type: Number
        },
        bookId:
        {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
);
module.exports = mongoose.model("Books", BookScheme)