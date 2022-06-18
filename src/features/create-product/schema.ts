const Joi = require('joi');

export default Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    stocks: Joi.number().integer().positive().required(),
})
