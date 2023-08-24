import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import "@fontsource/reem-kufi";

function verifyLabel(label){
  let imgPath = '';

  if (label === 'P'){ /*materia de programação*/
    imgPath = '../../img/categoria-programming.png';
  } else if (label === 'M'){ /*materia de matematica*/
    imgPath = '../../img/categoria-math.png';
  } else if (label === 'T'){ /*materia teorica/outras*/
    imgPath = '../../img/categoria-theory.png';
  }

  return (
    <div id='img-background-label'>
      {/* {console.log(imgPath)} */}
      <img src={imgPath}/>
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
        <label className='button'><a href='/MateriaDetalhes'>Saber mais</a></label>
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
