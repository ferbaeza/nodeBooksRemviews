const mongooseDelete = require('mongoose-delete')
const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});



UserScheme.plugin(mongooseDelete, {overrideMethods: "all"});
const User = mongoose.model("UserTest", UserScheme);
module.exports = User;