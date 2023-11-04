const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.getAll);
router.post("/", todoController.create);
router.patch("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
