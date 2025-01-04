// models/doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    expertise: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    ammount: {
        type: Number,
        required: true,
    },
    is_doctor: {
        type: Boolean,
        default: true,
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
