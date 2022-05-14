const mongooseDelete = require('mongoose-delete')
const mongoose = require("mongoose")

const BookScheme = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
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
    editorial:{
        type:String,
        unique: false,
    },
    synopsis:{
        type: String,
        required: true
    },
    isbn:{
        type: String
    },
    authorId:{
        type: mongoose.Types.ObjectId,
    }
},
{
    timestamps:true,
    versionKey: false
}
);
BookScheme.statics.findAll= function(){
    const joinData= this.aggregate([
        {
            $lookup:{
                from: "authors",
                localfield: "authorId",
                foreignField:"_id",
                as:"Autores"
            }
        }
    ])
    return joinData;
}






BookScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const Books = mongoose.model("Books", BookScheme)
module.exports = Books;