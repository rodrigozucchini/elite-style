import React from 'react'
import Instagram from './../assets/instagram.png'
import Facebook from './../assets/facebook.png'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='footer-back'>
        <div className='footer'>
        <div className='footer-back-div'>
            <h3 className='footer-h3'>Navegacion</h3>
            <div className='footer-link-div'>
            <Link to="/" className='footer-link'>INICIO</Link>
            <Link to="/" className='footer-link'>PRODUCTOS</Link>
            <Link to="/contacto" className='footer-link'>CONTACTO</Link>
            <Link to="/politicas" className='footer-link'>POLÍTICA DE CAMBIO</Link>
            <Link to="/preguntas-frecuentes" className='footer-link'>PREGUNTAS FRECUENTES</Link>
            </div>
        </div>
        <div className='footer-back-div'>
            <h3 className='footer-h3'>Medios de pago</h3>
            <p className='footer-pagos'>Aceptamos todos los medios de pago</p>
        </div>
        <div className='footer-back-div'>
            <h3 className='footer-h3'>Contacto</h3>
            <div className='contacto-div'>
                <p className='image-footer-emoji'>📞</p>
                <p className='contacto-p'>1140636824</p>
            </div>
            <div className='contacto-div'>
                <p className='image-footer-emoji'>@</p>
                <p className='contacto-p'>laclottashowroom@gmail.com</p>
            </div>
        </div>
        <div className='footer-back-div'>
            <h3 className='footer-h3'>Redes Sociales</h3>
            <div>
                <button className='butom-footer'>
                    <img src={Instagram} alt="Instagram" className='image-footer' />
                </button>
                <button className='butom-footer'>
                    <img src={Facebook} alt="Facebook" className='image-footer' />
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
