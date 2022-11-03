import React from 'react'
import { Navbar } from '../components/Navbar';
import { ImagenPrincipal } from '../components/ImagenPrincipal';
import { Logo } from '../components/Logo';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';

export const Inicio = () => {
  return (
    <>
        <Logo />
        <Navbar />
        <ImagenPrincipal />
        <Cards />
        <Footer />
    </>
  )
}