const Cart = require("../Model/CartModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error retrieving cart items:", error);
    res.status(500).json({ message: "Error retrieving cart items" });
  }
};

exports.addItemToCart = async (req, res) => {
  const { title, price, quantity, selectedSize, selectedImage, description } =
    req.body;

  if (!title || typeof price !== "number" || typeof quantity !== "number") {
    return res.status(400).json({ message: "Invalid input data" });
  }

  const newItem = new Cart({
    title,
    price,
    quantity,
    selectedSize,
    selectedImage,
    description,
    totalCost: price * quantity,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};

exports.updateItemQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (typeof quantity !== "number") {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item quantity:", error);
    res.status(500).json({ message: "Error updating item quantity" });
  }
};

exports.removeItemFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ message: "Error removing item from cart" });
  }
};
