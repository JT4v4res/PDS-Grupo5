import './index.css';
import Navbar from '../../Componentes/Navbar';
import { useState } from "react";
import Star from '../../Componentes/Star'
import api from "../../Componentes/apis";

import { Link,useParams } from "react-router-dom"
// Tela de avaliação geral que aparecerá as estrelas pro usuário avaliar
let materiasDoBanco;

api.get(`/materia`)
    .then((res) => {
      materiasDoBanco = res.data;
    });
    


const items = [...new Array(5).keys()];

function AvaliacaoGeral(materias){
const {Materiaid} = useParams();
let materia;
materiasDoBanco.map((element) => {
  if(element.materiaId == Materiaid){
    console.log("Iguakl")
    materia = element;
  }
});
const [activeIndex, setActiveIndex] = useState();
  const onClickStar = (index) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
  };
  return(

    <>
      <Navbar/>
        <div className='materia-title'>
        <div className='conteiner-top'>
          <div className='linha-lilas'/>
            <h2>{materia.nome}</h2>
          <div className='linha-rosa'/>
        </div>
        </div>
    
    <div className='avaliation-box'>
      <div className='text'>
        <h1>Avalie a disciplina de maneira geral</h1>
        <div className='texto-menor'>
          <p>Em uma escala de qualidade, quantas estrelas você classifica essa matéria?</p>
        </div>

        <div className="container-star">
            {items.map((index) => (
            <Star
              onClick={() => onClickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex}
            />
          ))}
        </div>

        <div className='btn-av_geral'>
          <Link to={'../Informativo'}>Continuar</Link>
        </div>
      </div>
    </div>
    </>
  ) 
};


export default AvaliacaoGeral;