import React from 'react'
import Instagram from './../assets/instagram.png'
import Facebook from './../assets/facebook.png'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='footer-back'>
        <div className='footer'>
        <div className='footer-back-div1'>
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
            <h3 className='footer-contacto'>Contacto</h3>
            <div className='contacto-div'>
                <p className='image-footer-emoji'>📞</p>
                <p className='contacto-p'>+54 9 11 2683-6800</p>
            </div>
            <div className='contacto-div'>
                <p className='image-footer-emoji'>@</p>
                <p className='contacto-p'>elitestylechaquetas@gmail.com</p>
            </div>
        </div>
        <div className='footer-back-div'>
            <h3 className='footer-h3'>Redes Sociales</h3>
            <div>
                <button className='butom-footer'>
                    <a href="https://www.instagram.com/__elitestyle__/" target="_blank"><img src={Instagram} className='image-footer' /></a>
                </button>
                <button className='butom-footer'>
                    <a href="https://www.facebook.com/michi.ind.18" target="_blank"><img src={Facebook} className='image-footer' /></a>
                </button>
            </div> 
        </div>
        </div>
    </div>
  )
}
