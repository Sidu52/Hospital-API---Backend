const doctor= require('../model/doctor');
const jwt = require('jsonwebtoken');
const patients= require('../model/patients');
const report = require('../model/report');

//Create User Report 
module.exports.create= async(req,res)=>{
    try{
        //find patient
        let Patients=await patients.findById(req.query.id);
        if(Patients){
            // Get doctor username from JWT token
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const decoded = jwt.decode(token);
            const doctorUsername = decoded.username;
            //Create patient Repot
            let Report = await report.create({
                status : req.body.status,
                date : `${new Date(Date.now()).toLocaleDateString().toString()}`,
                patient : req.query.id,
                doctor: doctorUsername
               
            });
            return res.status(200).json({
                message : "Report Generated Successfully",
                Report:Report
            });
        }
        return res.status(404).json({
            message : "Patient Not Found"
        });

        
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error",
            Error:err
        });
    }
}

//findAllReportBy Patiets ID
module.exports.patientsAllReport= async (req,res)=>{
    try{
        const Report=await report.find({patient:req.query.id});
        res.status(200).json({
            reports:Report
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            Error:err
        })
    }
}

//findAllReportBy filter by status
module.exports.findAllReport=async (req,res)=>{
    try{
        const Report= await report.find({status:req.body.status});
        res.status(200).json({
            reports:Report
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            Error:err
        })
    }
}