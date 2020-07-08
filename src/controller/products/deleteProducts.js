const connect = require("../../../config/connection");
const logUser = require('../../service/logUsers');
var valTest = process.env.NODE_ENV === "test" ? false : true; 

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const existProduct = await connect('products').select('*').where('id', id);
        if(existProduct !== 0 || existProduct.length !== 0) {
            await connect('products').where('id', id).del();
            if(valTest !== false) {
                logUser(res.locals.auth_data, `Delete product ${existProduct[0].name} productId: ${existProduct[0].id}`);
            }
            return res.status(200).json('Product Deleted Sucess');
        } else {
            return res.status(404).json("Product not found");
        }
    } catch(error) {
        return res.status(400).json(error.message);
    }
}

module.exports = deleteProducts;