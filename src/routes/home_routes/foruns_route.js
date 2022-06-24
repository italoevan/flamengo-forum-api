const express = require('express');
const controller = require("../../controllers/foruns/foruns_controller");
const routes = express.Router();


routes.get("/foruns", async (req, res) => {
    var response = await controller.getAllForuns();
    res.send(response);
});

module.exports = routes;