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
    
    
   let {hasAccount,token} =  await controller.auth(email,password,res)

   if(hasAccount){
    console.log("caiu aqu8");
    res.json({"token" : token, "hasAccount" : hasAccount})
    return;
   }
   
   res.status(403);
   res.json({"err" : "Tente novamente, login errado."});

});

module.exports = router;