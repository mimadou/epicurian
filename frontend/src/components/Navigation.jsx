import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import epicurianLogo from '../assets/epicurianLogo.png'

const Navigation = () => {

  const [menuNav, setMenuNav ] = useState(false)

   
  const toggleMenu = () =>{
    setMenuNav(!menuNav)
  }


    return (

            <div >  
            
<div  className="menu-toggle" onClick={toggleMenu} >
               <div className="menuBar"></div>
                <div className="menuBar"></div>
                <div className="menuBar"></div>
            </div> 
            <nav className= {menuNav? "navbar" : "navbar open"}>
                
              <div className='logo'>
                <NavLink to='/'>
                    <img src={epicurianLogo} alt="logo restaurant" className='epicurianLogo'/>
                </NavLink>
              
              </div>
                
            <ul className={menuNav? "navigation open": "navigation"}>
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
                    <li className='reservation'> Réservation</li>
                </NavLink>
            </ul>
            </nav>
            </div>
       
    );
};

export default Navigation;