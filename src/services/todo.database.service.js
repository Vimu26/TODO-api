const todoModel = require("../models/todo.model");

exports.getAll = async () => {
  return await todoModel.find();
};

module.exports.create = async (body) => {
  const task = new todoModel({
    task: body.task,
    start_date: body.start_date,
    due_date: body.due_date,
    description: body.description,
  });
  console.log(task);
  await task.save();
  return task;
};

exports.update = async (id,body) => {
  return await todoModel.findByIdAndUpdate(id, body, { new: true });
};
exports.delete = async (id) => {
  return await todoModel.findByIdAndDelete(id);
};
