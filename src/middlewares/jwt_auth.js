const jwt = require('jsonwebtoken');

function jwtAuth(req,res,next) {

    const authToken = req.headers["authorization"];

   
  
    if(authToken != undefined){
        const bearer = authToken.split(' ')[1];
        jwt.verify(bearer,process.env.PASS,(err,data)=>{

            if(err){

                res.status(400);
                res.json({"err" : "Token inválido " + err});

            }if(data){
                req.token = bearer;
                req.loggedUser = {
                    email: data["email"],
                    id : data["id"],
                    role: data["role"]
                };
                next();
            }
        });
    }else{
        res.status(401);
        res.json({"err" : "Token invalido"});
    }
   
}

module.exports = {jwtAuth};