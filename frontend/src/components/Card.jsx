import React from 'react';

const Card = ({carte}) => {
    return (
        <div>
            <li className='card'>
                <h3>{carte.name}</h3>
                <img src={carte.img} alt={carte.name} />
                <p>{carte.description}</p>
            </li>
        </div>
    );
};

export default Card;