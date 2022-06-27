const express = require("express");
const router = express.Router();
const controller = require("../../controllers/login/login_controller");


router.post("/auth", async (req, res) => {

    var {email, password} = req.body;

    if(email == undefined){
        res.status(400);
        res.json({err : "Email inválido"});
    }

    
    if(password == undefined){
        res.status(400);
        res.json({err : "Senha inválido"});
    }
    
    
    await controller.auth(email,password,res)

   


});

module.exports = router;