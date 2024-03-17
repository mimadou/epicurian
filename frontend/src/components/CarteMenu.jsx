import React, { useState } from 'react';
import { dataMenu } from '../data/dataMenu';
import Card from './Card';

const CarteMenu = () => {
    
    const [cartes] = useState(dataMenu)
    
    console.log(cartes)

    return (
        
            <ul className='carte'>
              {cartes.map((carte , index) =>(
              <Card key={index} carte={carte} />
              ))}
            </ul>
            
       
    );
};

export default CarteMenu;