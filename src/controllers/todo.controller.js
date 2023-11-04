const todoService = require("../services/todo.database.service");

module.exports.getAll = async (req, res) => {
  try {
    const todo = await todoService.getAll();
    res.status(200).json({
      status: true,
      message: "All TODO Found Successfully",
      data: todo,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(404).json({ status: false, message: err.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const todo = await todoService.create(req.body);
    res.status(201).json({
      status: true,
      message: "Task Created Successfully",
      data: todo,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(404).json({ status: false, message: err.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const todo = await todoService.update(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "Task updated Successfully",
      data: todo,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(404).json({ status: false, message: err.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const todo = await todoService.delete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Task Deleted Successfully",
      data: todo,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(404).json({ status: false, message: err.message });
  }
};
