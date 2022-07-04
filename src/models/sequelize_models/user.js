const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../services/db_connection");

var User = db.define("users", {
    "userid": {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantityposts : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "role": {
        type: DataTypes.STRING,
        allowNull: true,

    },


}, {
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
});

module.exports = User;