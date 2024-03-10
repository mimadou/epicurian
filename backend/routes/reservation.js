const express = require ('express')

const router = express.Router();
 
const reservationCtrl = require('../controllers/reservation')

router.post('/', reservationCtrl.createReservation)

//router.get('/' , reservationCtrl.getReservation)


module.exports = router;