const Reservation = require('../models/modelReservation')

exports.createReservation = (req , res) => {
  
    const { name, phoneNumber, email, date, time, numberOfPeople } = req.body;
    const reservation = new Reservation({
        name,
        email,
        phoneNumber,
        date,
        time,
        numberOfPeople 

    })

    reservation.save()
    .then(savedReservation =>res.status(201).json(savedReservation))
    .catch(error => res.status(400).json({message : error.message}))
};

// exports.getReservation = (req, res) =>{
//     Reservation.find()
//     .then(reservation => res.status(200).json(reservation))
//     .catch(error => res.status(400).json({message : error.message}))
// }