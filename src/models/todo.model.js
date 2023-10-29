const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    task : {
        type: String,
        required: true,
    },
    start_date : {
        type: Date,
        required: true,
        default : Date.now(),
    },
    due_date : {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
});

module.exports = new model('tasks' , todoSchema);