const connect = require('../../../config/connection');
const User = require('../../domains/user');
const userValidation = require('../../service/validations/userValidation');
const createToken = require('../../service/middleware/createToken');


const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const {error, value} =  userValidation.validate({ name, email, password});
        if(!error){
            const create = await connect('users').returning("id").insert(User(value));
            const token = createToken({id: create[0], name: value.name, email: value.email});
            await connect('users').where('id', create[0]).update('token', token);
            const user = await connect('users').select('*').where('id', create[0]);
            user[0].password = undefined;
            return res.status(201).json(user);
        } else {
            return res.status(400).json(`Erro validate: ${error}`);
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = createUser;