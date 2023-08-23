
import './index.css';

import {MdOutlineViewHeadline} from 'react-icons/md';

function MateriaDetalhes (materia, nivelEsforco, codigo, descrição, professores){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descrição = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend asid cinoyt bec Hissa."
  professores = ['Ranilson', 'Willy Tiengo', 'Rodrigo Paes']
return (
<div id='Conteudo-Disciplinas'>
    <div className='materia'>
      <ul className='label-principal'>
        <li className='icone-selecao'><MdOutlineViewHeadline/></li>
        <li key={materia}><label>{materia}</label></li>
      </ul>
    </div>
    
    <div className='esforço'>
        <li key={nivelEsforco}><label>Nível de esforço: {nivelEsforco[0]}</label></li>
    </div>
    
    <div className='descrição-geral'>
      <div className='container'>
    
        <label className='codigo' key={codigo}>Código: {codigo}</label>

        <div className='descricao-materia'>
            <p key={descrição}>{descrição}</p>
        </div>
    
        <div className='linha-vertical'></div>
       
        <label className='professor-Label' >Professores</label>
      <div className='lista-professor'>
        <ul>
          <li key={professores}><a href='/'>{professores[0]}</a></li>
          <li key={professores}><a href='/'>{professores[1]}</a></li>
          <li key={professores}><a href='/'>{professores[2]}</a></li>
        </ul>
      </div>
       
      
      </div>
    
      
    </div>
</div>
)

};


export default MateriaDetalhes;
