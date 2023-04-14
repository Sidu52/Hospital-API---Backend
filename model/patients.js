const mongoose =require('mongoose');

const patients = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    }
},{
    timestamps:true
});

const Patients= mongoose.model('patients',patients);
module.exports= Patients