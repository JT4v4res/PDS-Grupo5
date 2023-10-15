import './index.css';
import SideBar from '../../Componentes/SideBar';
import SeletorCurso from "../../Componentes/Seletor-Curso";
import BarGraph from "../../Componentes/GraficoBarra";
import Rating from '../../Componentes/Rating';
import Navbar from '../../Componentes/Navbar';
import {getMateriasDetalhes} from './data'
import {useParams} from "react-router-dom"
import api from "../../Componentes/apis";
let data
api
    .get(`/materiaIndicadores/:Materiaid/${1}`)
    .then((res) => {
        data = res.data;
    }).catch((e) => {
        console.log('error: ', e);
});


function MateriaIndicadores (materia, codigo, dadosIndicadores, nivelEsforco, ratingStar, informativos){

  const {Materiaid} = useParams();
  let post;
  // console.log("esse:", getMateriasDetalhes)
  console.log("Id url indicadores:", Materiaid)
  getMateriasDetalhes.forEach(element => {
      if(element.Materiaid === Materiaid){
          console.log('Id da avaliação:', Materiaid)
          console.log("element: ",element)
          post = element;
      }
  });
  materia = post.nome
  codigo =  post.codigo
  nivelEsforco = post.nivelEsforco
  ratingStar = post.ratingStar
  dadosIndicadores = post.dadosIndicadores
  informativos = post.informativos
  return (
  <>
  <Navbar/>
  <div className='page-content'>
    <div className='title-content'>
      <SideBar/>
      <SeletorCurso texto={materia}/>
      <Rating rating={ratingStar}/>
      <div className='esforco'>
        <label key={nivelEsforco}>Nível de esforço: {nivelEsforco}</label>
      </div>
      
    </div>
    <div className='codigo'>
      <label>Código: {codigo}</label>
    </div>
    <div className='main-area'>
      <div className='jornada-aluno'>

        <div className='title'>
          <label>Jornada do <span> aluno </span> </label>
          <div className='title-barra-inferior'/>
        </div>
        <div className='cards'>
            <ul className="dados-indicadores">
                  {
                      dadosIndicadores.map(dadosIndicadores => (
                          <li>
                              {dadosIndicadores}
                          </li>
                      ))
                  }
              </ul>
        </div>
      </div>

      <div className='informativos-escuro'>
        <ul className="dados-informativos">
                {
                    informativos.map(informativos => (
                        <li>
                            {informativos}
                        </li>
                    ))
                }
          </ul>
      </div>
      {/* Algum erro na lógica da coleta dos dados no arquivo data.js e no componente do graficoBarra */}
      <div className='bottom-info'>
        <div className='graph-container'>
            <BarGraph/>
        </div>
      </div>
    </div>
  </div>
   
  </>
)

};

export default MateriaIndicadores;
