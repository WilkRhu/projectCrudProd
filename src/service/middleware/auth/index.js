const jwt = require('jsonwebtoken');
const connect = require('../../../../config/connection');


const auth =  (req, res, next) => {
    const token_header = req.headers.auth;

    if(!token_header) return res.status(401).send({error: 'Token not sent!'});

    jwt.verify(token_header, process.env.KEY_SISTEM, async (err, decoded) =>{
        if(err) return res.status(401).send({error: 'Invalid token'});
        const {id} = decoded;
        const pass = await connect('users').select('*').where('id', id);
        if(pass.length !== 0){
            res.locals.auth_data = decoded;
            return next();
        } else {
            return res.status(401).json({error: 'User token not found!'})
        }
    })
}

module.exports = auth;