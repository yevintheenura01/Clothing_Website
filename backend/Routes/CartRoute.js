const express = require("express");
const CartController = require("../Controllers/CartController");

const router = express.Router();

router.get("/", CartController.getAllItems);
router.post("/", CartController.addItemToCart);
router.put("/:id", CartController.updateItemQuantity);
router.delete("/:id", CartController.removeItemFromCart);

module.exports = router;
