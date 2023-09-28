import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import Navbar from '../../Componentes/Navbar';
import "@fontsource/reem-kufi";
import { Link } from "react-router-dom"
import React from 'react';
import api from "../../Componentes/apis";

let data;

api
    .get('/materia')
    .then((res) => {
      data = res.data;
      console.log('Res.data: ',res.data);
    });

function verifyLabel(label){
  let imgPath = document.createElement('img');
  imgPath.classList.add('P')
  if (label === 'P'){ /*materia de programação*/
    imgPath.setAttribute('src', '../../img/categoria-programming.png');
  } else if (label === 'M'){ /*materia de matematica*/
    imgPath = '../../img/categoria-math.png';
  } else if (label === 'T'){ /*materia teorica/outras*/
    imgPath = '../../img/categoria-theory.png';
  }

  console.log(imgPath)
  return (
    <div id='img-background-label'>
      <img src={imgPath.getAttribute(1)}/>
    </div>
  )
}

function Materias (curso){
  curso = data[0].curso;
  // materia  = "Estrutura de Dados"
  // codigo = "BP336CB"
  // periodo = "2"
  // label = "P"
  console.log(curso)
    console.log('data', data[0].curso);
return (
<>
  <Navbar/>
  <SeletorCurso texto={curso}/>

  <div id='barra-busca'/>

  <div id='container-cards'>
    <div id='card-unitario'>
    {/* <img src='../../img/categoria-programming.png' className='img-background-label'/> */}
    {/* {verifyLabel(data[0].label)} */}
      <div id='conteudo-card-unitario'>
        <label className='title' key={data[0].nome}>{data[0].nome}</label>
        <ul>
          <li key={data[0].codigo}><label className='code'>Código: {data[0].codigo}</label></li>
          <li key={data[0].periodo}><label className='code'>Período: {data[0].periodo}</label></li>
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
