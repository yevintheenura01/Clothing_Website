//dmx4IUrzBFzbti4o

const express = require("express");
const mongoose = require("mongoose");

const RegRoute = require("./Routes/RegRoute");
const QuestionsRoute = require("./Routes/QuestionsRoute");
const LoginRoute = require("./Routes/LoginRoute");

const app = express();


//middleware
app.use(express.json());

app.use("/reg",RegRoute);
app.use("/questions",QuestionsRoute);
app.use("/login", LoginRoute);


mongoose
  .connect(
    "mongodb+srv://ytheenura5:dmx4IUrzBFzbti4o@cluster1.n1o1v.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log);