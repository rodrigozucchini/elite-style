import React, { useRef, useState, useEffect } from 'react'
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css';
import swal from 'sweetalert';
import { MenuPhone } from '../components/MenuPhone';
import { PuffLoader } from 'react-spinners';

export const Contacto = () => {
  const form = useRef();


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])


  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_cev8yfy', 'template_z15klzg', form.current, 'koEEk8GaP9mjiIgPi')
      .then((result) => {
        if(result.status === 200) {
          swal("Excelente", "Tu mensaje se envio correctamente.", "success");
          e.target.reset()
        } else {
          swal("Error","Espere unos segundos y vuelva a insistir.", "error");
        }
      }, (error) => {
          swal("Error", "Espere unos segundos y vuelva a insistir.", "error");
      });
  };
  return (
    <>        
    {
        loading  ? (<div className="loader"><PuffLoader color="#508AD3" size={90} loading={loading} /></div>)
      :
      <>
      <Logo />
      <MenuPhone />
      <Navbar />
      <h2 className="contacto-text">Contactanos por WhatsApp</h2>
      <a className="contacto-wp" href="https://bit.ly/3Uqmud1" target="_blank">WhatsApp</a>
      <h2 className="contacto-text">Contactanos por Email</h2>
      <div className="contacto">
      <div className="form-container" >
        <form ref={form} onSubmit={sendEmail} className="formEmail">
          <label className="labelEmail">Name</label>
          <input minLength={3} maxLength={60} type="text" name="user_name" className="inputEmail" required/>
          <label className="labelEmail">Email</label>
          <input minLength={4} maxLength={60} type="email" name="user_email" className="inputEmail" required/>
          <label className="labelEmail">Message</label>
          <textarea minLength={6} maxLength={300} name="message" className="inputMessage" required/>
          <input type="submit" value="Send" className="secondary-button env-button" />
        </form>
      </div>
    </div>
    <Footer />
    </>
    }
    </>
  )
}
