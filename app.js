const express = require("express");
const employeeRoutes=require('./src/routes/employeeRoutes');
const venueRoutes = require('./src/routes/venueRoutes');
const employeeSlot = require('./src/routes/employeeSlotRoutes');


const app = express();
app.use(express.json());

app.use('/employee', employeeRoutes)
app.use('/checkupVenue', venueRoutes)
app.use('/employeeSlot', employeeSlot)


module.exports=app