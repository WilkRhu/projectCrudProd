const criptPassword = require('../../service/middleware/criptPassword');

const userSchema = (data) => {
    const user = {
        name: data.name,
        email: data.email,
        password: criptPassword(data.password),
        token: "",
    }

    return user;
}

module.exports = userSchema;