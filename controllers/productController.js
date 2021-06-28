const { Product } = require('../models/product.js');


class ProductController {

  allProducts = async (req, res) => {

  }

  createProduct = async (req, res) => {

  }

  updateProduct = async (req, res) => {

  }

  deleteProduct = async (req, res) => {

  }

}


const productController = new ProductController();
module.exports = {
  allProducts: productController.allProducts,
  createProduct: productController.createProduct,
  updateProduct: productController.updateProduct,
  deleteProduct: productController.deleteProduct
}