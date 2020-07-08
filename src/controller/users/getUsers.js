const connect = require('../../../config/connection');


const getUserAll = async (req, res) => {
   try {
    const user = await connect('users').select('*');
    return res.status(200).json(user);
   } catch(error) {
    return res.status(400).json(error.message)
   }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await connect('users').select('*').where('id', id);
        if(user.length !== 0){
            return res.status(200).json(user[0]);
        } else {
            return res.status(404).json('User Not found')
        }
       } catch(error) {
        return res.status(400).json(error.message)
       }
}

module.exports = {
    getUserAll,
    getUser
};