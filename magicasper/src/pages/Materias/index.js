import './index.css';
import {MdOutlineViewHeadline} from 'react-icons/md';


function Materias (curso){
  curso = "Ciência da Computação"
  console.log(curso)
return (
<div id='Conteudo-Materias'>
  <div className='Curso'>
    <ul className='label-principal'>
      <li className='icone-selecao'><MdOutlineViewHeadline/></li>
      <li key={curso}><label>{curso}</label></li>
    </ul>
    
  </div>
  <div className='botao-container'>
    <label className='button'><a href='/MateriaDetalhes'>Detalhes Matérias</a></label>
  </div>
</div>
)
};


export default Materias
