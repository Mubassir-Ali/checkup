
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const app = require('./app')

// ----------Env Variable Configration----------
dotenv.config({ path: "./config.env" });

const DB =process.env.DATABASE
const PORT = process.env.PORT || 4000;

// ----------Server Listner----------

mongoose.connect(DB).then(() => {
  app.listen(PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
}).catch((error) => {
  console.log(error);
})