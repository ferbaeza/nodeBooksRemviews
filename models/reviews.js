const mongooseDelete = require('mongoose-delete')
const mongoose = require("mongoose")

const ReviewScheme = new mongoose.Schema(
    {
        title:
        {
            type:String,
            required: true
        },
        user: 
        {
            type:String,
            required: false
        },
        description:
        {
            type:String,
        
        },
        bookId:
        {
            type: mongoose.Types.ObjectId,
        },
        reviewID:
        {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
);

ReviewScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const Review= mongoose.model("Reviews", ReviewScheme);
module.exports = Review;