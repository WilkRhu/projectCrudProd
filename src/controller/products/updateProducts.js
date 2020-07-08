const connect = require('../../../config/connection');
const logUser = require('../../service/logUsers');
var valTest = process.env.NODE_ENV === "test" ? false : true; 

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const products = req.body;
        const existProduct = await connect('products').select('*').where('id', id);
        if (existProduct.length !== 0) {
            await connect('products').returning("id").where('id', existProduct[0].id).update(products);
            if(valTest !== false) {
                logUser(res.locals.auth_data, `Update product ${existProduct[0].name} productId: ${existProduct[0].id}`);
            }
            const returnProduct = await connect('products').select('*').where('id',  id);
            return res.status(201).json(returnProduct[0]);
        } else {
            return res.status(404).json('User not found');
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

module.exports = updateProducts;