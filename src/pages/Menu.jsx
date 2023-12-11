import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgMenu from '../assets/image_header_menu.jpg'

const Menu = () => {
    return (
        <div>
           <Header image={ImgMenu} 
           titlePage="Menu"  
           descriptionPage="Tous nos plats sont frais et préparés sur commande"/>
           
            le menu 
           <Footer/>
        </div>
    );
};

export default Menu;