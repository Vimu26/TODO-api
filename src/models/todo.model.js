const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  due_date: {
    type: Date,
  },
  description: {
    type: String,
  },
});

module.exports = new model("tasks", todoSchema);
