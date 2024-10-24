const express = require("express");
const FavoriteController = require("../Controllers/FavoritesController"); // Ensure this path is correct

const router = express.Router();

// Define routes
router.get("/", FavoriteController.getAllFavorites); // Handle GET requests to /favorites
router.post("/", FavoriteController.addItemToFavorites); // Handle POST requests to /favorites
router.delete("/:id", FavoriteController.removeItemFromFavorites); // Handle DELETE requests to /favorites/:id

module.exports = router;
