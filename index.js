const express =require('express');
const app =express();
const port = 8000;
const passport = require('passport');
const passportJWT =require('./config/passport_JWT');
const db= require("./config/mongoose");

app.use(express.urlencoded());

//setRoute
app.use('/',require('./route/index'));

//setServerForPortNo- 8000 
app.listen(port ,(err)=>{
    if(err){
        return console.log("Error in server run ",err);
    }
    return console.log("Server Run Sucessfull for port ",port);
})