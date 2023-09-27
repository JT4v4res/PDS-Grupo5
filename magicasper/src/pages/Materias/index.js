import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import Navbar from '../../Componentes/Navbar';
import "@fontsource/reem-kufi";
import { Link } from "react-router-dom"
import React from 'react';
import api from "../../Componentes/apis";

let data = ['Estrutura de Dados', 'COMP415', 'Alto', '2'];

// api
//     .get('/materia')
//     .then((res) => {
//       data = res.data;
//       console.log('Res.data: ',res.data);
//     });


function Materias (curso){
  curso = "Ciência da Computação"
  // materia  = "Estrutura de Dados"
  // codigo = "BP336CB"
  // periodo = "2"
  // label = "P"
  console.log(curso)
    console.log('data', data);
return (
<>
  <Navbar/>
  <SeletorCurso texto={curso}/>

  <div id='barra-busca'/>

  <div id='container-cards'>
    <div id='card-unitario'>
      <div id='conteudo-card-unitario'>
        <label className='title' key={data[0]}>{data[0]}</label>
        <ul>
          <li key={data[1]}><label className='code'>Código: {data[1]}</label></li>
          <li key={data[3]}><label className='code'>Período: {data[3]}</label></li>
        </ul>
        <label className='button'>
          <Link to='/MateriaDetalhes'>Saber mais</Link>
        </label>
      </div>
    </div>
    <div id='card-unitario'/>
    <div id='card-unitario'/>
    <div id='card-unitario'/>
    <div id='card-unitario'/>
    <div id='card-unitario'/>
  </div>
</>
)
};

export default Materias
