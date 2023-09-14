import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
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
  codigo = "COMP415"
  periodo = "2"
  label = "P"
  // console.log(curso)
return (
<>
  <SeletorCurso texto={curso}/>

  <div id='barra-busca'/>

  <div id='container-cards'>
    <div id='card-unitario'>
    {/* <img src='../../img/categoria-programming.png' className='img-background-label'/> */}
    {/* {verifyLabel(label)} */}
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
    
    <div id='card-unitario'>
      <div id='conteudo-card-unitario'>
          <label className='title' key={materia}>Geometria Analítica</label>
          <ul>
            <li key={codigo}><label className='code'>Código: MAT515</label></li>
            <li key={periodo}><label className='code'>Período: {periodo}</label></li>
          </ul>
          <label className='button'>
            <Link to='/MateriaDetalhes'>Saber mais</Link>
          </label>
      </div>
    </div>

    <div id='card-unitario'>
      <div id='conteudo-card-unitario'>
          <label className='title' key={materia}>Teoria dos Grafos</label>
          <ul>
            <li key={codigo}><label className='code'>Código: COMP016</label></li>
            <li key={periodo}><label className='code'>Período: 3</label></li>
          </ul>
          <label className='button'>
            <Link to='/MateriaDetalhes'>Saber mais</Link>
          </label>
      </div>
    </div>

    <div id='card-unitario'>
    <div id='conteudo-card-unitario'>
          <label className='title' key={materia}>Lógica Para Computação</label>
          <ul>
            <li key={codigo}><label className='code'>Código: COMP001</label></li>
            <li key={periodo}><label className='code'>Período: 1</label></li>
          </ul>
          <label className='button'>
            <Link to='/MateriaDetalhes'>Saber mais</Link>
          </label>
      </div>
    </div>

    <div id='card-unitario'>
    <div id='conteudo-card-unitario'>
          <label className='title' key={materia}>Computação Gráfica</label>
          <ul>
            <li key={codigo}><label className='code'>Código: COMP418</label></li>
            <li key={periodo}><label className='code'>Período: 5</label></li>
          </ul>
          <label className='button'>
            <Link to='/MateriaDetalhes'>Saber mais</Link>
          </label>
      </div>
    </div>

    <div id='card-unitario'>
    <div id='conteudo-card-unitario'>
          <label className='title' key={materia}>Ciência de Dados</label>
          <ul>
            <li key={codigo}><label className='code'>Código: COMP386</label></li>
            <li key={periodo}><label className='code'>Período: ELETIVA</label></li>
          </ul>
          <label className='button'>
            <Link to='/MateriaDetalhes'>Saber mais</Link>
          </label>
      </div>
    </div>
  </div>
</>
)
};

export default Materias
