
import SocialNetwork from './SocialNetwork';
import Logo from "../assets/logo_epicurium.png"



const Footer = () => {
    

        const sendMail = (e)=>{

            e.preventDefault() ;
            document.querySelector(".form").reset();
            const formMess = document.querySelector(".formMessage");
            formMess.innerHTML = "<p> vous allez recevoir toutes les actualités par mail</p>";
             
            setTimeout(() => {
                formMess.innerHTML = "";
              }, 2000);
            
        }
    
    
    return (
        
        <div className='footerPage'>

          <div className='footer' > 
            <div className='contact_footer'>
            <div className='imgLogod'>
                <img src={Logo} alt="" className='imgLogo' />
            </div>
            

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio maiores veniam cumque, autem deserunt laudantium nostrum. Nam accusamus voluptate itaque ducimus quae porro. Quod eveniet mollitia ullam cum repellat molestiae!</p>  
            </div>

            <div className='adressOpening'>
            <h2> Adresse</h2>
             <ul>
                <li>10 Cours Louis Lumière, 94300, Vincennes</li>
                <li> 01 49 57 59 59</li>
                <li>contact@epicurian_delight.com</li>
               
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

            <div className='newsletter'>
            <h2> Newsletter</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio</p>
            <form action="" onSubmit={sendMail} className='form'>
               
                <label htmlFor="">Email</label>
                <input type="email" required />

                <input type="submit" value= "S'inscrire" />
            </form>
            <div className="formMessage"> </div>
           
            </div>
            </div>
            <div className=''>
            <SocialNetwork/>
            </div>
             

        </div>
    );
};

export default Footer;