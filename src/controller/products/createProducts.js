const connect = require('../../../config/connection');
const productsValidations = require('../../service/validations/productsValidation');
const Product = require('../../domains/poducts/index');
const logUser = require('../../service/logUsers');
var valTest = process.env.NODE_ENV === "test" ? false : true; 

const createProducts = async (req, res) => {
    try {
        const { name, description, price, category, stock} = req.body;
        const { value, error } = productsValidations.validate({ name, description, price, category, stock });
        if(!error){
            const product = await connect('products').returning("id").insert(Product(value));
            const retProducts = await connect('products').select('*').where('id', product[0]);
            if(valTest !== false) {
                logUser(res.locals.auth_data, `Create Prod ${retProducts[0].name}`, retProducts[0].id);
            }
            return res.status(201).json(retProducts[0]);
        } else {
            return res.status(400).json('Error validation');
        }
    } catch(error) {
        return res.json(400).json(error.message);
    }
}

module.exports = createProducts;