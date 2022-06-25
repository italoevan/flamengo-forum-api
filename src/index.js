const express = require("express");
const appConsts = require('./consts/app_consts');
const RoutesExport = require("../src/routes/routes_export");
require('dotenv').config()
const app = express();


app.use(express.urlencoded());
app.use(express.json());

 
//CALLING ROUTES
new RoutesExport(app).callAllRoutes();
 

app.listen(process.env.PORT, ()=>{
    console.log("Sucess on port: " + process.env.PORT + ", app: " + appConsts.appName);
});  