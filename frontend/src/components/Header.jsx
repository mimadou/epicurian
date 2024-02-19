import React from 'react';
import Navigation from './Navigation';


const Header = ({image , titlePage , descriptionPage , slogan , button1 , button2}) => {
    return (
        <div>
           
            <div style = {{background:`url(${image}) center/cover ` }} className='header_'>
             <Navigation/>
               <div className='titleHeader'>
                  <h3>{slogan}</h3> 
                  <h1>{titlePage}</h1>
                  <p>{descriptionPage}</p>
                  
               </div>
            </div>

        </div>
    );
};

export default Header;
