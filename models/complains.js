const mongooseDelete = require('mongoose-delete')
const mongoose = require("mongoose")

const ComplainScheme = new mongoose.Schema(
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
        },
        complainID:
        {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
);

ComplainScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const Complain = mongoose.model("Complain", ComplainScheme)
module.exports =Complain;