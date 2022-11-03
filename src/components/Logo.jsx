import React from 'react'
import LogoPrincipal from '../assets/logo-elite2.jpg'
import '../styles/Logo.css'

export const Logo = () => {
  return (
    <div className="logoBack">
        <img className="logo" src={LogoPrincipal} alt="Logo de EliteStyle" />
    </div>
  )
}
