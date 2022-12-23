import React, { useState, useEffect } from "react";
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import '../styles/Politicas.css'
import { WhatssapFlotante } from '../components/WhatssapFlotante'
import { MenuPhone } from '../components/MenuPhone'
import { PuffLoader } from 'react-spinners';

export const Preguntas = () => {
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
          <h3 className="politicas-h2">COMUNICADO IMPORTANTE SOBRE LAS PREGUNTAS FRECUENTES</h3>
          <h3 className="politicas-h2">Dudas</h3>
          <p className="politicas-p">
          Si no encontras la respuesta que estas buscando o tenes alguna duda contactarnos via Whatsapp al 1126836800 o tocando el botón de Whatsapp que te aparece al ingresar a nuestra web.
          <br/>
          <br/>
          Aceptamos TODOS los medios de pago.
          <br/>
          <br/>
          Una vez efectuado el pago (en el caso de deposito o transferencia) debes informar el pago (mostrando el comprobante) para que podarmos dar de alta el pedido.
          </p>
        </div>
      </div>
      <div className="politicas-back">
      <div className="politicas">
          <h3 className="politicas-h2">Envios</h3>
          <p className="politicas-p">
          Hacemos envios a todo el país a través de correo Argentino, tenes la opción de elegir a domicilio o a tu sucursal de correo mas cercana a tu domicilio para que lo retires vos. Una vez despachado siempre enviamos numero de seguimiento.
          <br />
          <br />
          Tambien tenes la opción de motomensajeria (dentro de capital federal caba)
          </p>
        </div>
        </div>
        <div className="politicas-back">
        <div className="politicas">
          <h3 className="politicas-h2">¿Quién puede recibir el pedido?</h3>
          <p className="politicas-p">
          Si hiciste pedido a DOMICILIO, el pedido lo debe recibir una persona mayor de edad con documento que habite el domicilio.
          <br />
          <br />
          Si pediste a SUCURSAL deberá retirarlo el titular del envío o emitir una autorización para que retire un tercero.
          </p>
        </div>
        </div>
        <div className="politicas-back">
        <div className="politicas">
          <h3 className="politicas-h2">¿Cuánto tarda en llegar el pedido?</h3>
          <p className="politicas-p">
          El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra entre 2 y 7 días hábiles luego de acreditado el pago.
          <br />
          <br />
          Podes hacerle el seguimiento ingresando a la pagina del correo con el cual fue despachado ( Correo Argentino) Ingresando tu código de seguimiento (el cual sera enviado por mail o whatsapp al momento de informar el despacho del pedido) 
          </p>
        </div>
        </div>
        <div className="politicas-back">
        <div className="politicas">
          <h3 className="politicas-h2">¿Qué sucede si no llego a retirar el pedido de la sucursal o no me localizan en el domicilio?</h3>
          <p className="politicas-p">
          En el caso de envío a sucursal, el paquete permanece por 5 días hábiles una vez que llega a la misma.
          <br />
          <br />
          A domicilio van 3 veces a lo largo de una semana
          luego de lo mencionado el paquete vuelve a remitente (o sea a nosotros). 
          <br />
          <br />
          Una vez que nos llega, nos ponemos en contacto para volver a despacharlo. 
          <br />
          Antes de realizarlo el cliente debe abonar el envío. 
          <br />
          Una vez realizado el pago, se despacha con un nuevo número de seguimiento.
          </p>
        </div>
        </div>
        <WhatssapFlotante />
      <Footer />
      </>
    }
    </>
  )
}
