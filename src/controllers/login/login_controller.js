const user = require('../../models/sequelize_models/user');
const jwt = require("jsonwebtoken");

const secret = "HcGjuQrODV";


async function findAll() {
    let result = await user.findAll();
    return result;
}

async function auth(email, password, res) {

    let mail = await user.findAll({
        where: {
            "email": email,
            "password": password
        },
        raw: true
    });

    const hasAccount = mail.length != 0;

    var tokenn;

    if (hasAccount) {

        jwt.sign({ id: mail["id"], email: mail["email"] }, secret, { expiresIn: "400h", }, function (err, token) {

            if (token) {
                
                console.log(token);
                tokenn = token;
            }

        });

    }
    console.log(tokenn + "Esse eh o meu token");
    return {
        "hasAccount": hasAccount,
        "token": tokenn
    };
}
module.exports = { findAll, auth };