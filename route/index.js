const express =require('express');
const routes = express.Router();


routes.use('/doctors',require('./doctors'));
routes.use('/patients',require('./patients'));
routes.use('/report',require('./report'));

module.exports=routes;