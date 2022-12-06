const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId= mongoose.Schema.Types.ObjectId

const slotSchema = Schema({
    venueId: ObjectId,
    employeeId: ObjectId,
    scheduleAt: Date,
    status: {
        type: String,
        enum: ['allocated','completed','cancelled','allocated cancelled','allocated completed'],
        default: 'allocated',
    }
});

const EmpSlot=mongoose.model('employeeSlot', slotSchema);
module.exports = EmpSlot