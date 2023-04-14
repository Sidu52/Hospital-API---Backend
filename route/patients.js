const express =require('express');
const routes = express.Router();
const passport = require('passport')


const patientscontroller= require('../controller/patientsController')

//patientRegister
routes.post("/register",patientscontroller.register);

module.exports=routes;