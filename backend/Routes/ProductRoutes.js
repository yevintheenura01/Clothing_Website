const express = require('express');
const { getAllProducts } = require('../Controllers/ProductController');
const router = express.Router();

router.get('/', getAllProducts);

module.exports = router;
