//dmx4IUrzBFzbti4o

const express = require("express");
const mongoose = require("mongoose");

const app = express();


//middleware
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://ytheenura5:dmx4IUrzBFzbti4o@cluster1.n1o1v.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log);