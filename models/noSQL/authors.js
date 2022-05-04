const mongoose = require("mongoose")

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
module.exports = mongoose.model("Authors", AuthorScheme)