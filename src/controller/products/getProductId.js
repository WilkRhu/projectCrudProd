const connect = require("../../../config/connection/index");
const logUser = require("../../service/logUsers");
var valTest = process.env.NODE_ENV === "test" ? false : true; 

const getProductId = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await connect('products').select('*').where('id', id);
        if(products.length !== 0){
           if(valTest !== false) {
               logUser(res.locals.auth_data, `Get product ID`);
           }
            return res.status(200).json(products[0]);
        } else {
            return res.status(404).json('Product not found!');
        }
    } catch(error) {
        return res.status(400).json(error.message);
    }

}
module.exports = getProductId;