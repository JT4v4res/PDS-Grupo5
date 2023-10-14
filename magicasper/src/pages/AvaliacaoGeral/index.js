import './index.css';
import Navbar from '../../Componentes/Navbar';
import { useState } from "react";
import Star from '../../Componentes/Star'
import { Link,useParams } from "react-router-dom"
// Tela de avaliação geral que aparecerá as estrelas pro usuário avaliar

const items = [...new Array(5).keys()];

function AvaliacaoGeral(materias){

  
   materias =[
    {
      id: '001',
      nome: 'Programação 1',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '002',
      nome: 'Cálculo 1',
      codigo: 'Comp445',
      professor: 'Matheus',
      semestre: '2024.1'
    },
    {
      id: '003',
      nome: 'Introdução a computação',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '004',
      nome: 'Ciência de dados',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '005',
      nome: 'Geometria Analitica',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '006',
      nome:  'Computação e ética',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
]
const {Materiaid} = useParams();
let materia;
materias.forEach(element => {
  if(element.id === Materiaid){
      console.log('Id da avaliação:', Materiaid)
      console.log("element: ",element)
      materia = element;
      console.log('post: ', materia)
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