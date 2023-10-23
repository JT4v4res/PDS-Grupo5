import './index.css';
import FormularioAvaliacao from '../../Componentes/FormularioAvaliacao';
import Navbar from '../../Componentes/Navbar';
// import { getPost, getPosts } from "./api";
import { disciplinas } from "./data";
import {useParams} from "react-router-dom"


function AvaliacaoMateria(){

  const {Materiaid} = useParams();
  
  let post;

  disciplinas.forEach(element => {
    if(element.id === Materiaid){
        post = element;
    }
  });

  return(
    <>
    <Navbar/>
      <div className='materia-title'>
        <div className='conteiner-top'>
          <div className='linha-lilas'/>
              <h2>{post['Nome']}</h2>
          <div className='linha-rosa'/>
        </div>
      </div>
      <div className='main-content'>
        <div className='left-info'>
          <div className='post-info'>
                <ul className='detail-posts'>
                  <li><label>Código: {post['código']}</label><br></br></li>
                  <li><label>Professor: Fulano</label><br></br></li>
                  <li><label>Semestre: {post.semestre}</label></li>
                </ul>
          </div>
          <div className='card-claro-form'>
            <p>A cada matéria você ganhará + 50 pontos</p>
          </div>
        </div>
        <div className='form-side'>
              <div className='formulario'>
                <FormularioAvaliacao/>
              </div>
        </div>
      </div>
    </>
  )
}

export default AvaliacaoMateria;

