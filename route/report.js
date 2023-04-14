const express =require('express');
const routes = express.Router();
const passport= require('passport')

const reportcontroller= require('../controller/repotsController')

//Report Create route
routes.post("/patients/create-report",passport.authenticate('jwt', { session: false }),reportcontroller.create);

//findAll Single Patients Report
routes.get("/patients/patientsAllReport",reportcontroller.patientsAllReport);

//gindAll Routes
routes.get("/patients/findAllReport",reportcontroller.findAllReport);

module.exports=routes;