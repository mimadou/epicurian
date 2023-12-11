import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgHome from '../assets/image_header.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='headerHome' >
            <Header image={ImgHome} titlePage = "Epicurian Delight" 
            descriptionPage="Une cuisine gourmande à tendance gastronomique et moderne." 
            slogan="Restaurant au centre de Paris"/>
            </div>
            <div className='buttonHeader'>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <Link to="/reservation">
                    <button>Reservation</button>
                </Link>
            </div>
            accueil
           <Footer/>
           
        </div>
    );
};

export default Home;