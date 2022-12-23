import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'
import getProduct from '../api/api'


export const Card = () => {
  const allProduct = getProduct

  return (
    <>
    {
      allProduct.map((product,index) => 
        <div className="card-back">
          <img  alt="titulo-foto" key={index} className="card-img" src={product.foto0} />
          <Link to={product.id} className="card-buttom">Ver más</Link>
        </div>
      )
    }
    </>
  )
}
