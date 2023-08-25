import "@fontsource/reem-kufi";
import './index.css';
import {MdOutlineViewHeadline} from 'react-icons/md';

function MateriaDetalhes (materia, nivelEsforco, codigo, descrição, professores, matExpositivo, literatura, questoes){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descrição = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed aliquam sem sodales Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend asid cinoyt bec Hissa.asid cinoyt bec Hissa."
  professores = ['Ranilson', 'Willy Tiengo', 'Rodrigo Paes', 'Roberta Lopez']
  matExpositivo = ['Material 1', "Material 2"]
  literatura = ['Material 1', 'Material 2']
  questoes = ['Questão 1', 'Questão 2']

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

    <div id="material-estudo">
      <div className="material-label">Material de Estudo</div>
      <div className="main-box">
              <ul className="lista-mat-expositivo">
                <div className="lista-label">Material Expositivo</div>
                <br></br>
                  <li key={matExpositivo[0]}>{matExpositivo[0]}</li>
                  <li key={matExpositivo[1]}>{matExpositivo[1]}</li>
              </ul>
              <ul className="lista-literatura">
                <div className="lista-label">Material na Literatura</div>
                <br></br>
                  <li key={literatura[0]}>{literatura[0]}</li>
                  <li key={literatura[1]}>{literatura[1]}</li>
              </ul>
              <ul className="lista-questoes">
                <div className="lista-label">Questões importantes</div>
                <br></br>
                  <li key={questoes[0]}>{questoes[0]}</li>
                  <li key={questoes[1]}>{questoes[1]}</li>
              </ul>
          </div>
    </div>
</div>
)

};


export default MateriaDetalhes;
