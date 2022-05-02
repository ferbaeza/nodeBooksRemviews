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
module.exports = mongoose.model("Reviews", ReviewScheme)