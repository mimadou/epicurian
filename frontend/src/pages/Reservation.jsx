import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgReservation from '../assets/image_header_reservation.jpg'
import ReservationForm from '../components/ReservationForm';





const Reservation = () => {
    return (
        <div >
            <Header image={ImgReservation} 
            titlePage="Reservation"
            descriptionPage="Retrouvez nous dans votre restaurant de luxe"/>
             
             <div className='reservationSection'>
                <ReservationForm/> 
             </div>
            
             
            <Footer/>
        </div>
    );
};

export default Reservation;