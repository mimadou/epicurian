const mongoose = require('mongoose');

const modelReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: { type: Date, required: true },
    time:{type : String , required : true},
    numberOfPeople : { type : Number , required : true},
    
});

module.exports = mongoose.model('Reservation', modelReservationSchema);
