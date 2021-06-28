const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },

  product_description: {
    type: String,
    required: true
  },

  date_uploaded: {
    type: Date,
    default: Date.now(),
    required: true
  },

  date_edited: {
    type: Date,
    required: true
  },

  product_varieties: {
    type: Array,
    required: true
  }

});


module.exports = { Product: mongoose.model('products', ProductSchema) }