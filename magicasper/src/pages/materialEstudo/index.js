import './index.css';
import SeletorCurso from '../../Componentes/Seletor-Curso';
import SideBar from '../../Componentes/SideBar';

function MaterialEstudo (materia, codigo, textoBase){
  materia = "Estrutura de Dados"
  textoBase = "Lorem ipsum dolor sit amet\n" +
  "consectetur adipiscing elit,\n" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
  "Elementum nibh tellus molestie nunc non blandit massa enim nec."
  codigo = "BP336CB"
  return (
    <>
      <div className='page-content'>
        <div className='title-content'>
          <SideBar/>
          <SeletorCurso texto={materia}/>
        </div>

        <div className='codigo'>
          <label>Código: {codigo}</label>
        </div>

        <div className='superior-block'>
          <div className='card-material-expositivo'>
            <div className='title-mat-expo'>
              <label>Materiais expositivos</label>
              <div className='title-barra-inferior'/>
            </div>
            <div className='material-expositivo'>
              <p>{textoBase.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}</p>
            </div>
          </div>

          <div className='card-questoes'>
            <div className='title-quest'>
              <label>Questões</label>
              <div className='title-barra-inferior-2'/>
            </div>
            <div className='questoes'>
              <p>{textoBase.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
              ))}</p>
            </div>
          </div>
        </div>

        <div className='inferior-block'>
          <div className='card-literat'>
            <div className='title-literat'>
              <label>Materiais na literatura</label>
              <div className='title-barra-inferior-3'/>
            </div>
            <div className='materiais-literat'>
              <p>{textoBase.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
              ))}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )

};

export default MaterialEstudo;
