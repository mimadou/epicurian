import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_fmno2mp",
        "template_fp32ggb",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        },
        (err) => {
          console.log(err.text);
          form.current.reset();
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">

        <input type="text" name="name" required autoComplete="off" id="name" placeholder= "Nom" />
        <input type="text" name="prenom" required autoComplete="off" id="prenom" placeholder= "Prénom" />
       
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
          placeholder="Email"
        />
        
        <input type="tel" id="phone"  name="phone" required placeholder="Téléphone"/>
        
        <textarea name="message" id="mess"  placeholder="Message"/>
        <input type="submit" value="Envoyer" id="hover_button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;