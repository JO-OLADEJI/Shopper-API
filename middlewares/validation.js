const Joi = require('joi');


const productValidation = (body) => {
  const schema = Joi.object({
    product_name: Joi.string().min(3).required(),
    product_descripton: Joi.string().min(3).required(),
    date_uploaded: Joi.date().required(),
    date_edited: Joi.date().required(),
    product_variety: Joi.array().min(1).required()
  });

  return schema.validate(body);
}


module.exports = { productValidation }