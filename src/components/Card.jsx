import React from 'react'
import '../styles/Card.css'
import Sweeter from '../assets/sweeter.jpg'

export const Card = () => {
  return (
    <div className="card-back">
        <img src={Sweeter} alt="sweeter" className="card-img" />
        <p className="card-p">SWEETER</p>
    </div>
  )
}
