const express = require('express');
const controller = require("../../controllers/foruns/foruns_controller");
const routes = express.Router();
const jwtAuthMiddleware = require("../../middlewares/jwt_auth");


routes.get("/foruns", jwtAuthMiddleware.jwtAuth, async (req, res) => {
    var response = await controller.getAllForuns();
    res.send(response);
});

module.exports = routes;