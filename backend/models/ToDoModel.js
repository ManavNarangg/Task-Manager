const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true 
  }
});

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
