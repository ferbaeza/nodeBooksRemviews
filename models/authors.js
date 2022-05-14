const mongoose = require("mongoose")
const mongooseDelete = require('mongoose-delete')

const AuthorScheme = new mongoose.Schema(
    {
        name:
        {
            type:String,
            required: true
        },
        nickname:
        {
            type:String,
            unique: false,
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
AuthorScheme.statics.findAllData= function(){
    const joinData= this.aggregate([
        {
            $lookup:{
                from: "books",
                localfield: "bookId",
                foreignField:"_id",
                as:"libros"
            }
        },
        {
          $match: {
                    "libros": {$ne: []}
                }
        
            },
            {
            $unwind: "$libros"
        }
    ])
    return joinData;
}


AuthorScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports  = mongoose.model("Authors", AuthorScheme)
