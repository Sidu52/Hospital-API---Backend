const mongoose = require('mongoose');


const report = mongoose.Schema({
    status : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    patient : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
    },
    doctor:{
        type:String,
      
    }
});
//Created schema for report

const Report= mongoose.model('report',report);
//Named the collection as Report

module.exports = Report;