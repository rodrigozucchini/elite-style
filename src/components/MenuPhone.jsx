import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './../styles/MenuPhone.css';

function MenuPhone() {

  const [menuPhone, setMenuPhone] = useState(false)

  const clickMenu = () => {
    setMenuPhone(!menuPhone)
  }

  return (
    <>
    { menuPhone  === true ?  
    <>
    <button onClick={clickMenu} className="CreateTodoButtonX">x</button> 
        <div className="menuPhone">
            <Link to="/" className="menuPhone-link">INICIO</Link>
            <Link to="/" className="menuPhone-link">PRODUCTOS</Link>
            <Link to="/contacto" className="menuPhone-link">CONTACTO</Link>
            <Link to="/politicas" className="menuPhone-link">POLÍTICA DE CAMBIO</Link>
            <Link to="/preguntas-frecuentes" className="menuPhone-link">PREGUNTAS FRECUENTES</Link>
        </div>
    </>
    :  
    <button onClick={clickMenu} className="CreateTodoButton">☰</button>}
    </>
  );
}

export { MenuPhone };