import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import Navbar from '../../Componentes/Navbar';
import "@fontsource/reem-kufi";
import { Link } from "react-router-dom"

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

function Materias (label, curso, materia, codigo, periodo){
  curso = "Ciência da Computação"
  materia  = "Estrutura de Dados"
  codigo = "BP336CB"
  periodo = "2"
  label = "P"
  // console.log(curso)
return (
<>
  <Navbar/>
  <SeletorCurso texto={curso}/>

  <div id='barra-busca'/>

  <div id='container-cards'>
    <div id='card-unitario'>
    {/* <img src='../../img/categoria-programming.png' className='img-background-label'/> */}
    {verifyLabel(label)}
      <div id='conteudo-card-unitario'>
        <label className='title' key={materia}>{materia}</label>
        <ul>
          <li key={codigo}><label className='code'>Código: {codigo}</label></li>
          <li key={periodo}><label className='code'>Período: {periodo}</label></li>
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
