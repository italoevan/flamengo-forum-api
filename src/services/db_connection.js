const Sequelize = require('sequelize');

const database = new Sequelize("flaforum","root", "italo445", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = database;