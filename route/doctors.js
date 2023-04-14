const express =require('express');
const routes = express.Router();
const passport= require('passport')

const doctorcontroller= require('../controller/doctorController')

//setUpDoctorRoutefor

//register
routes.post("/register",doctorcontroller.register);
//login
routes.get("/login",doctorcontroller.login);

module.exports=routes;