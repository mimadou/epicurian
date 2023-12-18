import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgReservation from '../assets/image_header_reservation.jpg'
import MySection from '../components/MySection';

const Reservation = () => {
    return (
        <div>
            <Header image={ImgReservation} 
            titlePage="Reservation"
            descriptionPage="Retrouvez dans votre restaurant de luxe"/>
             

             <MySection/>
            <Footer/>
        </div>
    );
};

export default Reservation;