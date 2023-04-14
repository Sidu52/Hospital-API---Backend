const patients= require('../model/patients');

// Register Patients
module.exports.register= async (req,res)=>{
    try{
        let Patients= await patients.findOne({phone:req.body.phone})
        if(Patients){
            console.log("Enter")
            return res.status(200).json({
                message:"Patients Already Register",
                patients:Patients
            })
        }
        Patients=await patients.create(req.body);
        return res.status(200).json({
            message:"Patients Register Successfull",
            patients:Patients
        })
    }catch(err){
        return res.status(404).json({
            message:"Internal Server Error",err

        })
    }
}