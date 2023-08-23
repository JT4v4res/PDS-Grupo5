import './index.css';
import {MdOutlineViewHeadline} from 'react-icons/md';
import MateriaDetalhes from '../MateriasDetalhes'

function Disciplinas (curso){
  curso = "Ciência da Computação"
  console.log(curso)
return (
  <div id='Conteudo-Disciplinas'>
  <div className='Curso'>
    <ul className='label-principal'>
      <li className='icone-selecao'><MdOutlineViewHeadline/></li>
      <li key={curso}><label>{curso}</label></li>
    </ul>
  </div>
  
    <label className='button'><a href='/MateriaDetalhes'>Detalhes Matérias</a></label>

</div>
)
};


export default Disciplinas
