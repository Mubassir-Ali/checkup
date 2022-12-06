const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venuScheema = Schema({
    name: String,
    location: String
});

const venu = mongoose.model('venue', venuScheema);
module.exports = venu