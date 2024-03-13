import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgHome from '../assets/image_header.jpg'
import { Link } from 'react-router-dom';
import CarteMenu from '../components/CarteMenu';
import Chef1 from'../assets/chef_cuisinier1.jpg';
import Chef2 from '../assets/chef_cuisinier_2.jpg';
import imageHistory from '../assets/image_history.png';
import Avis from '../components/Avis';




const Home = () => {
   
    
    const navigateToReservation =() =>{
        window.location.href = '/reservation';
    }


    return (
        <div>
            <div className='headerHome' >
            <Header image={ImgHome} titlePage = "Epicurian Delight" 
            descriptionPage="Une cuisine gourmande à tendance gastronomique " 
            slogan="Restaurant au centre de Paris"/>

             <div className='buttonHeader'>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <Link to="/reservation">
                    <button>Reservation</button>
                </Link>
            </div>
            </div>
            
             <section className='presentation'>
                
                
                
                <div className='history'>
                 
                 <div className='textHistory'>
                    <h2> Epicurian Délight </h2>
                    <h3> A propos de nous </h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam ratione quis tempore commodi praesentium consectetur iste cupiditate tempora sapiente molestias, pariatur exercitationem temporibus vitae necessitatibus! Cumque   </p>

                    <p> utem commodi! Minus iusto distinctio accusantium veniam aliquid earum repudiandae aliquam, quod sequi, cumque suscipit nam placeat incidunt obcaecati illo assumenda blanditiis voluptate ea. Corrupti facere harum at illo consectetur </p>

                    
                       <button className='reservationHistory' onClick={navigateToReservation} > Réservation</button>
                   

                 </div> 

                 <div className='imgHistory'>
                    <img src={imageHistory} alt="" />
                 </div>
                </div>

             </section>
               <section className='container1'>
                <div className='container1_a'> 
                </div>
                <div className='container1_b'>
                  <img src={Chef1} alt=" chef cuisinier" />
                  <div>
                    <h2> Epicuririan Delight</h2>
                        <p> ouvert du lundi au dimanche </p>
                        <p> 10 Cours Louis Lumière, 94300, Vincennes</p>
                  </div>
                  
                  <img src={Chef2} alt=" chef cuisinier" />
                </div>

            </section>
            <section className='carteMenuHome'>
                <CarteMenu/>
            </section>
            
            <section className='avis'>
            <Avis/>
            </section>
            
              
           <Footer/>
           
        </div>
    );
};

export default Home;