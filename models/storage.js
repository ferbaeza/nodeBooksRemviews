const mongooseDelete = require('mongoose-delete')
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


StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const Storage= mongoose.model("Storage", StorageScheme)
module.exports = Storage; 