import './index.css';
import Navbar from '../../Componentes/Navbar';
import { useState } from "react";
import Star from '../../Componentes/Star'
import { Link } from "react-router-dom"

const items = [...new Array(5).keys()];

function AvaliacaoGeral(materia){
  materia = 'Programação 1'
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
            <h2>{materia}</h2>
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