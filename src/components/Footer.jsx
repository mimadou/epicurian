import React from 'react';


const Footer = () => {
    return (
        <div className='footer' >
            <div className='contact'>
            <h2> Logo</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio maiores veniam cumque, autem deserunt laudantium nostrum. Nam accusamus voluptate itaque ducimus quae porro. Quod eveniet mollitia ullam cum repellat molestiae!</p>  
            </div>

            <div className='adressOpening'>
            <h2> Adresse</h2>
             <ul>
                <li>10 Cours Louis Lumière, 94300, Vincennes</li>
                <li> 01 49 57 59 59</li>
                <li>contact@Epicurian_Delight.com</li>
             </ul>
            </div>

            <div className='adressOpening'>
            <h2> Horaire d'ouverture</h2>
            <ul>
                <li>Lundi - Jeudi</li>
                <li> 11h - 00h</li>
                <li>Vendredi - Diamanche</li>
                <li>11h - 2h</li>
             </ul>
            </div>

            <div>
            <h2> Newsletter</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio</p>
            <form action="">
               
                <label htmlFor="">Email</label>
                <input type="email" />
               

                
                <input type="submit" value= "envoyer" />
            </form>
            </div>
         
        </div>
    );
};

export default Footer;