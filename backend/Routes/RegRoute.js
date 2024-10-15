// routes/registerRoutes.js
const express = require("express");
const route = express.Router();

const regController = require("../Controllers/RegController");

// Route for user registration (POST request)
route.post("/", regController.registerUser);

module.exports = route;
