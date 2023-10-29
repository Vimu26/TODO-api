const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require('./routes/todo.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/todo",todoRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/TODO-APP", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err.message);
  });

  app.listen(3020, (error) => {
    if (!error) {
      return console.log("Api Started Successfully in Port 3020!"); 
    } 
    return console.error(error.message);
  });