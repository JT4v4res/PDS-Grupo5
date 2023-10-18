import './index.css';
import SeletorCurso from '../../Componentes/Seletor-Curso';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import api from "../../Componentes/apis";
import PontosBckgrd from '../../Componentes/PontosBckgrd';
import {getMateriasDetalhes} from '../MateriaIndicadores/data'
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
let data;

// api
//     .get(`/materialEstudo/:Materiaid/${1}`)
//     .then((res) => {
//         data = res.data;
//     }).catch((e) => {
//         console.log('error: ', e);
// });

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

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const dadosasync = async () => {
      const dados = await api
          .get(`/avaliation/`)
          .then((res) => {
            setData(res.data);
            console.log('Resquest data: ', res.data);
          }).catch((e) => {
            console.log('erro: ', e);
          });
      console.log('async')

      console.log('Dados requisição: ', dados);
      // setData(dados);
    }

    dadosasync();
  }, [Materiaid]);

  if (data !== undefined && data !== null) {
    materia = data[0].materia.nome;
    // textoBase = "Lorem ipsum dolor sit amet\n" +
    //     "consectetur adipiscing elit,\n" +
    //     "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
    //     "Elementum nibh tellus molestie nunc non blandit massa enim nec."
    // codigo = "BP336CB"
    return (
        <>
          <Navbar/>
          <div className='page-content'>
            <div className='title-content'>
              <SideBar/>
              <SeletorCurso texto={materia}/>
            </div>

            <div className='codigo'>
              <label>Código: {data[0].materia.codigo}</label>
            </div>

            <div className='superior-block'>
              <div className='card-material-expositivo'>
                <div className='title-mat-expo'>
                  <label>Materiais expositivos</label>
                  <div className='title-barra-inferior'/>
                </div>
                <div className='material-expositivo'>
                  <p>
                    {data[0].materia.matExpositivo}
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
                    {data[0].materia.questions}
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
                    {data[0].materia.literatura}
                  </p>
                  {/* <PontosBckgrd/> */}
                </div>
              </div>
            </div>


          </div>
        </>
    )
  } else {
    return ('Carregando...');
  }

};

export default MaterialEstudo;
