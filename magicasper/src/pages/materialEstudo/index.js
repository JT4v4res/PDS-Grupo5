import './index.css';
import SeletorCurso from '../../Componentes/Seletor-Curso';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import PontosBckgrd from '../../Componentes/PontosBckgrd';
import {getMateriasDetalhes} from '../MateriaIndicadores/data'
import {useParams} from "react-router-dom"

function MaterialEstudo (materia, codigo, textoBase){
  const {Materiaid} = useParams();
  let post;
  getMateriasDetalhes.forEach(element => {
      if(element.Materiaid === Materiaid){
          console.log('Id da avaliação:', Materiaid)
          console.log("element: ",element)
          post = element;
      }
  });
  materia = post.nome
  textoBase = "Lorem ipsum dolor sit amet\n" +
  "consectetur adipiscing elit,\n" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
  "Elementum nibh tellus molestie nunc non blandit massa enim nec."
  codigo = "BP336CB"
  return (
    <>
      <Navbar/>
      <div className='page-content'>
        <div className='title-content'>
          <SideBar/>
          <SeletorCurso texto={materia}/>
        </div>

        <div className='codigo'>
          <label>Código: {post.codigo}</label>
        </div>

        <div className='superior-block'>
          <div className='card-material-expositivo'>
            <div className='title-mat-expo'>
              <label>Materiais expositivos</label>
              <div className='title-barra-inferior'/>
            </div>
            <div className='material-expositivo'>
              <p>
                {post.matExpositivo.map((line, index) =>(
                  <span key={index}>{line}</span>
                ))}
              </p>
            </div>
          </div>

          <div className='card-questoes'>
            <div className='title-quest'>
              <label>Questões</label>
              <div className='title-barra-inferior-2'/>
            </div>
            <div className='questoes'>
            <p>
                {post.questoes.map((line, index) =>(
                  <span key={index}>{line}</span>
                ))}
              </p>
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
               <p>
                {post.literatura.map((line, index) =>(
                  <span key={index}>{line}</span>
                ))}
              </p>
            {/* <PontosBckgrd/> */}
            </div>
          </div>
        </div>
        

      </div>
    </>
  )

};

export default MaterialEstudo;
