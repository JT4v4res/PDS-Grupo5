import './index.css';
import {MdOutlineViewHeadline} from 'react-icons/md';

// Verificar como mover para o componente "conteudo-disciplinas" com um parâmetro da função

function mainLabel (curso){
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
      <div>
    </div>
  </div>
)
};


export default mainLabel
