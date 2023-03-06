import React, {useState, useEffect} from 'react'
import '../styles/Product.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import getProduct from '../api/api';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { PuffLoader } from 'react-spinners';

export const Product = () => {
  const [contador, setContador] = useState(0)


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  const { id } = useParams()
  const navigate = useNavigate()

  const imgpost = getProduct.find(img =>img.id === id);

  const returnBack = () => {
    navigate(-1)
  }

  const mostrarImgAtras = (e) => {
    setContador(contador-1)
    }

  const mostrarImgAdelante = (e) => {
    setContador(contador+1)
  }

let retornar = () => {
  if(contador === 0) {
    return `${imgpost.foto0}`
  } else if(contador === 1) {
    return `${imgpost.foto1}`
  } else if(contador === 2) {
    return `${imgpost.foto2}`
  } else if(contador === 3) {
    return `${imgpost.foto3}`
  } else  {
    return `${imgpost.foto4}`
  }
}


  return (
    <>
      {
        loading  ? (<div className="loader"><PuffLoader color="#508AD3" size={90} loading={loading} /></div>)
      :
      <>
    <Logo />
      <div>
        <div className="createTodoButtonH">
          <button className="CreateTodoButtonD" onClick={returnBack}>⇠</button> 
        </div>
            <div className="details" key={imgpost.id}>

              {contador <=  0 ? null :<button className="todoButtonL" onClick={mostrarImgAtras}>⇦</button>}


              <div className="big-img">
                <img src={retornar()} 
                alt="imagen de ropa"
                />
              </div>

              {contador > 3 || (imgpost.foto4 === undefined && contador === 3) || (imgpost.foto3 === undefined && contador === 2)  || (imgpost.foto1 === undefined && contador === 0) ? null :<button className="todoButtonR" onClick={mostrarImgAdelante}>⇨</button>}

              <div className="box">
                <p className="titulo-p">{imgpost.titulo}</p>
                {imgpost.productDetails === null ? <></> : 
                <div className="thumb" >
                  <img src={imgpost.foto0} />
                  {imgpost.foto1 === undefined ? <></> : <img src={imgpost?.foto1} />}
                  {imgpost.foto2 === undefined ? <></> : <img src={imgpost?.foto2} />}
                </div>
                }
                {imgpost.productDetails === null ? <></> : 
                <div className="thumb" >
                  {imgpost.foto3 === undefined ? <></> : <img src={imgpost?.foto3} />}
                  {imgpost.foto4 === undefined ? <></> : <img src={imgpost?.foto4} />}
                </div>
                }
                <h2 className="contacto-text">Contactanos por WhatsApp</h2>
                <a className="contacto-wp" href="https://bit.ly/3Uqmud1" target="_blank">WhatsApp</a>
              </div>
            </div>
      </div>
      <Footer />
      </>
    }
    </>
  )
}
