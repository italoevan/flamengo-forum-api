const { DataTypes } = require("sequelize");
const db = require("../../services/db_connection");

var Foruns = db.define('foruns',
    {
        "id" : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        "nome" : {
            type: DataTypes.STRING,
            allowNull: false
        },
        "quantityTopics" : {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        "permission" : {
            type: DataTypes.STRING,
            allowNull: true 
        }
    });