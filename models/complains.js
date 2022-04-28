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
module.exports = mongoose.model("Complain", ComplainScheme)