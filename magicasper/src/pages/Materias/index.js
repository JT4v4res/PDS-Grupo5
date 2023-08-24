import './index.css';
import "@fontsource/reem-kufi";
import {MdOutlineViewHeadline} from 'react-icons/md';

function Materias (curso, materia, codigo, periodo){
  curso = "Ciência da Computação"
  materia  = "Estrutura de Dados"
  codigo = "BP336CB"
  periodo = "2"
  // console.log(curso)
return (
<div id='Conteudo-Materias'>
  <div className='Curso'>
    <ul className='label-principal'>
      <li className='icone-selecao'><MdOutlineViewHeadline/></li>
      <li key={curso}><label>{curso}</label></li>
    </ul>
  </div>
  <div id='botao-container'>
    <label className='title' key={materia}>{materia}</label>
    <ul>
      <li key={codigo}><label className='code'>Código: {codigo}</label></li>
      <li key={periodo}><label className='code'>Período: {periodo}</label></li>
    </ul>

    <div className='botao-sabermais'>
    <label className='button'><a href='/MateriaDetalhes'>Saber mais</a></label>
    </div>
  </div>
</div>
)
};


export default Materias
