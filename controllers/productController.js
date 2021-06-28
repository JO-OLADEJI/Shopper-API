const { Product } = require('../models/product.js');


class ProductController {

  allProducts = async (req, res) => {
    // get all products from the db
    try {
      const productsList = await Product.find();
      res.json({ 'success': true, 'result': productsList });
    }
    catch(err) {
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
    // delete a product by id
  }

}


const productController = new ProductController();
module.exports = {
  allProducts: productController.allProducts,
  createProduct: productController.createProduct,
  updateProduct: productController.updateProduct,
  deleteProduct: productController.deleteProduct
}