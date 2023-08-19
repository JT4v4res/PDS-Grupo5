// import React, { Component } from 'react';

import Navbar from './Componentes/Navbar';
// import MateriasDetalhes from './Componentes/MateriasDetalhes';
import Disciplinas from './Componentes/Disciplinas';
import Home from './Componentes/Home';
import Perfil from './Componentes/Perfil';
import { Route, Routes } from "react-router-dom"
import './App.css';

function App (){
  // let Component; 
  // switch (window.location.pathname) {
  //   case '/Home':
  //     Component = <Home/>
  //     break
  //   case '/Perfil':
  //     Component = <Perfil/>
  //     break
  //   case '/Disciplinas':
  //     Component = <Disciplinas/>
  //     break
  //   default:
  //     window.location.pathname = '/'
  // }
  
  return (
  <>
    <Navbar />
    <div className = "container">
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Disciplinas" element={<Disciplinas/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
