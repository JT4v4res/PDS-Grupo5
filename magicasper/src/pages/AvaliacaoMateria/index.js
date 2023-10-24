import './index.css';
import FormularioAvaliacao from '../../Componentes/FormularioAvaliacao';
import Navbar from '../../Componentes/Navbar';
import {useParams} from "react-router-dom"
import api from "../../Componentes/apis";

let materiasDoBanco;

api.get(`/materia`)
    .then((res) => {
      materiasDoBanco = res.data;
    });
    


function AvaliacaoMateria(){

  const {Materiaid} = useParams();
  
  let post;
  
  materiasDoBanco.map((element) => {
    if(element.materiaId == Materiaid){
      console.log("Iguakl")
      post = element;
    }
  });


  console.log("Materia final:", materiasDoBanco)

  return(
    <>
    <Navbar/>
      <div className='materia-title'>
        <div className='conteiner-top'>
          <div className='linha-lilas'/>
              <h2>{post.nome}</h2>
          <div className='linha-rosa'/>
        </div>
      </div>
      <div className='main-content'>
        <div className='left-info'>
          <div className='post-info'>
                <ul className='detail-posts'>
                  <li><label>Código: {post.codigo}</label><br></br></li>
                </ul>
          </div>
          <div className='card-claro-form'>
            <p>A cada matéria você ganhará + 50 pontos</p>
          </div>
        </div>
        <div className='form-side'>
              <div className='formulario'>
                <FormularioAvaliacao  />
              </div>
        </div>
      </div>
    </>
  )
}

export default AvaliacaoMateria;

