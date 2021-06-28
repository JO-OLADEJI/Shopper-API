const express = require('express');
const router = express.Router();
const { allProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');


// get all products from DB
router.get('/', allProducts);

// create a new product
router.post('/', createProduct);

// update a product by id
router.put('/:id', updateProduct);

// delete a product by id
router.delete('/:id', deleteProduct);


module.exports = router;