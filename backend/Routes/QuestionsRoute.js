const express = require("express");
const route = express.Router();

const questionsController = require("../Controllers/QuestionsController");

route.post("/",questionsController.questions);

module.exports = route;