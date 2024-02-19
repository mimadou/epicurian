import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgReservation from '../assets/image_header_reservation.jpg'
import CalendlyComponent from '../components/CalendlyComponent';




const Reservation = () => {
    return (
        <div>
            <Header image={ImgReservation} 
            titlePage="Reservation"
            descriptionPage="Retrouvez dans votre restaurant de luxe"/>
             
            <CalendlyComponent/>
            
             
            <Footer/>
        </div>
    );
};

export default Reservation;