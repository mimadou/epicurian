import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImgContact from '../assets/image_header_contact.jpg'
import ContactForm from '../components/ContactForm';
import GoogleApiWrapper  from '../components/CarteMap';


const Contact = () => {
    return (
        <div>
           <Header image={ImgContact} 
           titlePage= "Contactez Nous" 
           descriptionPage="Reservation et informations" />
            <section className='contact'>
                <div className='information'>
                    <div>
                      <h2> Avez-vous faim ? </h2>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat praesentium, eveniet, quos, omnis aperiam rem quisquam porro sapiente accusantium mollitia similique? Ut obcaecati, cumque quis voluptas sunt illo repellat.</p>
                    </div>
                    <div>
                      <h2> Pour réserver ou des informations </h2>
                      <p> 01 49 57 59 59 </p>
                    </div>
                    <div>
                      <h2> Un feedback?</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat obcaecati maiores hic quos omnis doloribus, rem te</p>
                    </div>
                    <div className='formMaps'>
                      <div><ContactForm/></div>
                      <div><GoogleApiWrapper/></div>
                    </div>

                    <div>
                      <h2> Horaires d'ouverture</h2>
                      <p>Du Lundi au Dimanche de 11h à 2h</p>
                    </div>
                    <div>
                      <h2> Happy Hours</h2>
                      <p>Du vendredi  au Dimanche de 00h à 2h</p>
                    </div>
                   
                </div>

                <div>

                </div>

                <div>

                </div>

            </section>
           <Footer/> 
        </div>
    );
};

export default Contact;