const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    lprice: {
        type: Number,
        required: true
    },
    fprice: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("vehicles", vehicleSchema);