const user = require('../../models/sequelize_models/user');


async function findAll() {
    let result = await user.findAll();
    return result;
}

async function auth(email, password) {

    let mail = await user.findAll({
        where: {
            "email": email,
            "password": password
        },
        raw: true
    });

    return mail.length != 0;
}
module.exports = { findAll, auth };