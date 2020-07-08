const connect = require('../../../config/connection');

const logUser = async (token, action) =>{ 
    const log = {
        user_id: token.id,
        userName: token.name,
        userEmail: token.email,
        action: action
    }

    await connect('logs').insert(log);
}

module.exports = logUser;