import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Error } from './pages/Error';
import { Politicas } from './pages/Politicas.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Preguntas } from './pages/Preguntas.jsx'
import { Product } from './components/Product';
import { PuffLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return(
        <div className="App">
      {
        loading  ? (<div className="loader"><PuffLoader color="#508AD3" size={90} loading={loading} /></div>)
      :
      <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas-frecuentes" element={<Preguntas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
      }
  </div>
  )
}

export default App;
