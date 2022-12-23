import React from 'react'
import Camion from '../assets/camion-de-carga.png'
import Wp from '../assets/whatsapp.png'
import AtencionPersonalizada from '../assets/pregunta-del-cliente.png'
import '../styles/BasicComponents.css'

export const BasicComponent = () => {
  return (
    <div className="basicComponentBack-bacground">
    <div className="basicComponentBack">
        <div className="basicComponent">
            <img src={Camion} className="image-basic"/>
            <div className="div-basic">
                <h3 className="h3-basic">ENVIOS A TODO EL PAIS</h3>
                <p className="p-basic">Llegamos donde quieras!</p>
            </div>
        </div>
        <div className="basicComponent">
            <img src={AtencionPersonalizada} className="image-basic"/>
            <div className="div-basic">
                <h3 className="h3-basic">ATENCION PERSONALIZADA</h3>
                <p className="p-basic">Resolvemos consultas de la mejor forma</p>
            </div>
        </div>
        <div className="basicComponent">
            <img src={Wp} className="image-basic"/>
            <div className="div-basic">
                <h3 className="h3-basic">CONTACTANOS</h3>
                <p className="p-basic">elitestylechaquetas@gmail.com</p>
            </div>
        </div>
    </div>
    </div>
  )
}
