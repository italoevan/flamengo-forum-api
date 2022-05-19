const express = require("express");
const appConsts = require('./consts/app_consts');

const app = express();

app.listen(appConsts.PORT, ()=>{
    console.log("Sucess on port: " + appConsts.PORT);
});