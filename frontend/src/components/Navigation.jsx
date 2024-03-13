import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  const [menuNav, setMenuNav ] = useState(false)

   
  const toggleMenu = () =>{
    setMenuNav(!menuNav)
  }


    return (

        

        <div> 

            <div className='menu-responsive'>
             <div onClick={toggleMenu} className={menuNav? "menu-toggle open" : "menu-toggle" }> 
                <div className="menuBar">  </div>
                <div className="menuBar">  </div>
                <div className="menuBar">  </div>
            </div>
               <nav className='navbar'>
                
            <ul className={menuNav? 'navigation open' : 'navigation'}>
            
                <NavLink to="/" activeClassaName="active">
                    <li> Accueil</li>
                </NavLink>
                <NavLink to="/menu" activeClassaName="active">
                    <li> Menu</li>
                </NavLink>
                <NavLink to="/contact" activeClassaName="active">
                    <li>Contact </li>
                </NavLink>
                <NavLink to="/reservation" activeClassaName="active " >
                    <li className='reservation'> Réservation</li>
                </NavLink>
            </ul>
            </nav>

            </div>

            <div className='menu-non-responsive'>     
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
                    <li className='reservation'> Réservation</li>
                </NavLink>
            </ul>
            </nav>
            </div>
        </div>
    );
};

export default Navigation;