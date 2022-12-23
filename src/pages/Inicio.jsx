import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar';
import { ImagenPrincipal } from '../components/ImagenPrincipal';
import { Logo } from '../components/Logo';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { BasicComponent } from '../components/BasicComponent';
import { WhatssapFlotante } from '../components/WhatssapFlotante';
import { MenuPhone } from '../components/MenuPhone';
import { PuffLoader } from 'react-spinners';

export const Inicio = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  
  return (
    <>
        {
        loading  ? (<div className="loader"><PuffLoader color="#508AD3" size={90} loading={loading} /></div>)
      :
      <>
        <MenuPhone />
        <Logo />
        <Navbar />
        <ImagenPrincipal />
        <BasicComponent />
        <Cards />
        <WhatssapFlotante />
        <Footer />
        </>
    }
    </>
  )
}
