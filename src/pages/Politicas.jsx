import React, { useState, useEffect } from "react";
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import '../styles/Politicas.css'
import { WhatssapFlotante } from '../components/WhatssapFlotante'
import Medidas from './../assets/medida.jpeg'
import { MenuPhone } from '../components/MenuPhone'
import { PuffLoader } from 'react-spinners';

export const Politicas = () => {
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
      <Logo />
      <MenuPhone />
      <Navbar />
      <div className="politicas-back">
        <div className="politicas">
          <h3 className="politicas-h2">COMUNICADO IMPORTANTE SOBRE LAS POLITICAS DE CAMBIO</h3>
          <h2 className="politicas-h3">CAMBIOS: NO realizamos cambios ni por talle ni por modelo. </h2>
          <p className="politicas-p">Tenemos tabla de medidas de cada modelo para que se midan y sepan cual es su talle exacto en chaqueta. <br /><br />No realizamos reintegros, ni devoluciones.
          <br /><br />
          Esperamos tu pedido, Muchas gracias. 
          </p>
          <div className="div-medida">
            <img src={Medidas} className="medida"/>
          </div>
        </div>
      </div>
      <Footer />
      <WhatssapFlotante />
      </>
    }
    </>
  )
}
