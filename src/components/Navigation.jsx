import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
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
                    <li> Réservation</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;