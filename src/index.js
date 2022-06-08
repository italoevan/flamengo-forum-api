const express = require("express");
const database = require("../database/db_connection");
const appConsts = require('./consts/app_consts');
require('dotenv').config()

const app = express();
console.log(process.env)
app.use(express.urlencoded());
app.use(express.json());

 
 
app.get("/foruns", async function (req,res){

    var response = await database.query("SELECT * FROM foruns");
    res.json(response[0]);

});

app.listen(process.env.PORT, ()=>{
    console.log("Sucess on port: " + process.env.PORT + ", app: " + appConsts.appName);
});  