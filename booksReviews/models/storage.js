const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:
        {
            type:String,
            required: true
        },
        filename: 
        {
            type:String,
        },
    },
    {
        timestamps:true,
        versionKey: false
    }
);
module.exports = mongoose.model("Storage", StorageScheme)