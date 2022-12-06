const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeScheema =new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
    }
});

const Employee = mongoose.model('employee', employeeScheema);
module.exports = Employee