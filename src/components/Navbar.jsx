import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarBack">
            <Link to="/" className="navbarP">INICIO</Link>
            <Link to="/" className="navbarP">PRODUCTOS</Link>
            <Link to="/contacto" className="navbarP">CONTACTO</Link>
            <Link to="/politicas" className="navbarP">POLÍTICA DE CAMBIO</Link>
            <Link to="/preguntas-frecuentes" className="navbarP">PREGUNTAS FRECUENTES</Link>
        </div>
    </div>
  )
}
