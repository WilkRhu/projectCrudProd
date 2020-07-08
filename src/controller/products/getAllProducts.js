const connect = require("../../../config/connection/index");
const logUser = require("../../service/logUsers");
var valTest = process.env.NODE_ENV === "test" ? false : true; 

const getAllProduct = async (req, res) => {
    try {
        const products = await connect('products').select('*');
        if(valTest !== false) {
            logUser(res.locals.auth_data, `Get All Product`);
        }  
        return res.status(200).json(products);
    } catch(error) {
        return res.status(400).json(error.message);
    }

}
module.exports = getAllProduct;