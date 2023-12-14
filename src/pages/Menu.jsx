import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgMenu from '../assets/image_header_menu.jpg'
import CarteMenu from '../components/CarteMenu';
import MenuDrink from '../assets/carte_menu_boissons.png'
import MenuEat from '../assets/carte_menu_formule.jpg'
import CarteOpen from '../assets/carte_menu_ouverture.jpg'

const Menu = () => {
    return (
        <div>
           <Header image={ImgMenu} 
           titlePage="Menu"  
           descriptionPage="Tous nos plats sont frais et préparés sur commande"/>

          
          <div className='cartemenu'>
            <div className='carteMenuRestaurant'>
              <img src={CarteOpen} alt='cartemenuopen'/>
              <img src={MenuEat} alt='carte menu formules'/>
              <img src={MenuDrink} alt='carte menu boissons'/>

            </div>
            <CarteMenu/>
          </div>
           <Footer/>
        </div>
    );
};

export default Menu;