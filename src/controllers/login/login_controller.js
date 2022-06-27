const user = require('../../models/sequelize_models/user');
const jwt = require("jsonwebtoken");


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




    if (hasAccount) {
        console.log("Ha conta");

        jwt.sign({ id: mail[0]["id"], email: mail[0]["email"] }, process.env.PASS, { expiresIn: "400h", }, function (err, token) {
            if (err) {
                res.json({ "err": err });
            }

            if (token) {

                console.log(token);
                res.json({ "token": token, "hasAccount": hasAccount });
                return true;
            }

        });


    } else { res.json({ "err": "erro ao logar" }) }

}
module.exports = { findAll, auth };