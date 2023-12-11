import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                
                </div> 
            <ul className='navigation'>
                <NavLink to="/">
                    <li> Accueil</li>
                </NavLink>
                <NavLink to="/menu">
                    <li> Menu</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact </li>
                </NavLink>
                <NavLink to="/reservation">
                    <li className='reservation' style={{color:'black', background:"#DB9423"}}> Réservation</li>
                </NavLink>
            </ul>
            </nav>
        </div>
    );
};

export default Navigation;