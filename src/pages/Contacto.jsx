import React, { useRef } from 'react'
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css'

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Logo />
      <Navbar />
      <h2 class="contacto-text">Contactanos por Email</h2>
      <div class="contacto">
      <div class="form-container" >
        <form ref={form} onSubmit={sendEmail} className="formEmail">
          <label className="labelEmail">Name</label>
          <input type="text" name="user_name" className="inputEmail"/>
          <label className="labelEmail">Email</label>
          <input type="email" name="user_email" className="inputEmail"/>
          <label className="labelEmail">Message</label>
          <textarea name="message" className="inputMessage" />
          <input type="submit" value="Send" className="secondary-button env-button" />
        </form>
      </div>
    </div>
    <h2 class="contacto-text">Contactanos por WhatsApp</h2>
    <a class="contacto-wp">WhatsApp</a>
    </>
  )
}
