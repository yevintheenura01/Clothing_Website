const express = require("express");
const router = express.Router();

const cardController = require("../Controllers/CardController");

// Route for saving card details (POST request)
router.post("/", cardController.saveCardDetails);

// Route for getting card details (GET request)
router.get("/:userID", cardController.getCardDetails);

module.exports = router;
