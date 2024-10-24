const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  selectedSize: { type: String, required: true },
  selectedImage: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Favorite', favoriteSchema);
