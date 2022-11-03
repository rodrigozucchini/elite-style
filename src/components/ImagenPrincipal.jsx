import React from 'react'
import ImagePrincipal from '../assets/envios.png'
import '../styles/ImagenPrincipal.css'

export const ImagenPrincipal = () => {
  return (
    <div className="imagenPrincipalBack">
        <img className="imagenPrincipal" src={ImagePrincipal} alt="Imagen Principal" />
    </div>
  )
}
