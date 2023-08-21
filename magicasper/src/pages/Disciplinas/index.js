import './index.css';
import {MdOutlineViewHeadline} from 'react-icons/md';
// import mainLabel from './Componentes/mainLabel'

function Disciplinas (curso){
  curso = "Ciência da Computação"
  console.log(curso)
return (
  // <mainLabel/>
  <div id='Conteudo-Disciplinas'>
  <div className='Curso'>
    <ul className='label-principal'>
      <li className='icone-selecao'><MdOutlineViewHeadline/></li>
      <li key={curso}><label>{curso}</label></li>
    </ul>
  </div>
  <div>
</div>
</div>
)
};


export default Disciplinas
