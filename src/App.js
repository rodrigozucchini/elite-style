import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Error } from './pages/Error';
import { Politicas } from './pages/Politicas.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Preguntas } from './pages/Preguntas.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas-frecuentes" element={<Preguntas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
