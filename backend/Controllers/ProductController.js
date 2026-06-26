const Products = require("../Model/Product");

const getAllProducts = async (req, res) => {
  try {
    res.status(200).json(Products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
};
