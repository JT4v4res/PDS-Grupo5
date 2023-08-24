import "@fontsource/reem-kufi";
import './index.css';

import {MdOutlineViewHeadline} from 'react-icons/md';

function MateriaDetalhes (materia, nivelEsforco, codigo, descrição, professores){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descrição = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed aliquam sem sodales Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend asid cinoyt bec Hissa.asid cinoyt bec Hissa."
  professores = ['Ranilson', 'Willy Tiengo', 'Rodrigo Paes', 'Roberta Lopez']
return (
<div id='Conteudo-Disciplinas'>
    <div className='materia'>
      <ul className='label-principal'>
        <li className='icone-selecao'></li>
        <li key={materia}><label>{materia}</label></li>
      </ul>
    </div>
    <div className='esforço'>
        <li key={nivelEsforco}><label>Nível de esforço: {nivelEsforco[0]}</label></li>
    </div>
    <div className='descrição-geral'>
      <div className='container'>
        <div className='descricao-materia'>
            <label className='codigo' key={codigo}>Código: {codigo}</label>
            <p key={descrição}>{descrição}</p>
        </div>
        <div className='linha-vertical'></div>
        <label className='professor-Label' >Professores</label>
        <div className='lista-professor'>
          <ul>
            <li key={professores[0]}><a href='/'>{professores[0]}</a></li>
            <li key={professores[1]}><a href='/'>{professores[1]}</a></li>
            <li key={professores[2]}><a href='/'>{professores[2]}</a></li>
            <li key={professores[3]}><a href='/'>{professores[3]}</a></li>
          </ul>
        </div>
      </div>
    </div>
</div>
)

};


export default MateriaDetalhes;
