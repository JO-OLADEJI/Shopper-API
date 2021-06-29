const { Product } = require('../models/product.js');


class ProductController {

  allProducts = async (req, res) => {
    try {
      const productsList = await Product.find();
      res.json({ 'success': true, 'response': productsList });
    }
    catch(error) {
      res.json({ 'success': false });
    }
  }

  createProduct = async (req, res) => {
    // validate the product for errors

    // create a new product from the model
  }

  updateProduct = async (req, res) => {
    // validate the product

    // update 'date_edited' field of the product

    // update the product by id
  }

  deleteProduct = async (req, res) => {
    const id = req.id;
    try {
      const dbResponse = await Product.deleteOne({ _id: id });
      res.json({ 'success': true, 'response': dbResponse });
    }
    catch(error) {
      res.json({ 'success': false });
    }
  }

}


const productController = new ProductController();
module.exports = {
  allProducts: productController.allProducts,
  createProduct: productController.createProduct,
  updateProduct: productController.updateProduct,
  deleteProduct: productController.deleteProduct
}