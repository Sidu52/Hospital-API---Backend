const mongoose = require('mongoose');

const doctor= new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Doctor= mongoose.model('doctor',doctor)
module.exports=Doctor;
