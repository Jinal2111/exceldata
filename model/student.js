const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    Name: { 
        type: String,
        require : true  
    },
    Surname : {
        type : String, 
        require : true
    },
    Marks : {
        type : Number,
        require : true
    },
    Result : {
        type : String,
        require : true
    },
    Age : {
        type : Number,
        require : true
    }
 }
);

const studentmodel = mongoose.model('details', studentSchema);

module.exports =  studentmodel;

