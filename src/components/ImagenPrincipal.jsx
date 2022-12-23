import React from 'react'
import ImagePrincipal from '../assets/envios1.png'
import '../styles/ImagenPrincipal.css'


export const ImagenPrincipal = () => {
  return (
    <div className='cards-imagenPrincipal'>
    <div className="imagenPrincipalBack">
        <img className="imagenPrincipal" src={ImagePrincipal} alt="Imagen Principal" />
        <a className="buttonCompra" href="https://bit.ly/3Uqmud1" target="_blank">Shop Now</a>
    </div>
    </div>
  )
}
