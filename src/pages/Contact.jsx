import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgContact from '../assets/image_header_contact.jpg'

const Contact = () => {
    return (
        <div>
           <Header image={ImgContact} 
           titlePage= "Contactez Nous" 
           descriptionPage="Reservation et informations" />
            le contact
           <Footer/> 
        </div>
    );
};

export default Contact;