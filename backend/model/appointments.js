// models/appointments.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    medicine: {
        type: String,
    },
    about: {
        type: String,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
