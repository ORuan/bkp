const mongoose = require("mongoose");

const Leadschema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name deve ser definido'],
        
    },
    email: {
        type: String,
        require: [true, 'Email deve ser definido'],
    }
});
const LeadModel = mongoose.model("leads", Leadschema)
module.exports = LeadModel