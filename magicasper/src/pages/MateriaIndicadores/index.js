import './index.css';
import SideBar from '../../Componentes/SideBar';
import SeletorCurso from "../../Componentes/Seletor-Curso";
import BarGraph from "../../Componentes/GraficoBarra";
import Rating from '../../Componentes/Rating';
import Navbar from '../../Componentes/Navbar';
import {getMateriasDetalhes} from './data'
import {useParams} from "react-router-dom"
import api from "../../Componentes/apis";
import {useEffect, useState} from "react";
let data;
api
    .get(`/materia/${1}`)
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

  if (data !== undefined && data !== null)
  {
    materia = data[0].materia.nome;
    codigo = data[0].materia.codigo;
    nivelEsforco = data[0].materia.nivelEsforco;
    ratingStar = Math.floor((Math.random() * (5 - 1) + 1));
    dadosIndicadores = [`Cerca de ${Math.floor((Math.random() * (100 - 30) + 1))}% dos alunos são aprovados na 1ª tentativa`,
        `${Math.floor((Math.random() * (100 - 30) + 1))}%  não recomendam pegar  essa matéria se não viu o básico de programação`,
        `${Math.floor((Math.random() * (100 - 30) + 1))}% afirmam que o seu professor foi didático`,
        `${Math.floor((Math.random() * (100 - 30) + 1))}% dos usuários já concluíram essa matéria`,
        `${Math.floor((Math.random() * (100 - 30) + 1))}% dos alunos recomendam essa matéria no inicio do curso`,
        `${Math.floor((Math.random() * (100 - 30) + 1))}% afirmam que essa matéria requer muito tempo de dedicação`];
    informativos = [`Última avaliação: ${data[0].updatedAt.substring(0, 10)}`, `Cerca de ${Math.floor((Math.random() * (58 - 30) + 1))} alunos avaliaram esta materia`];
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
  }
  else  {
    return ('Carregando...');
  }
};

export default MateriaIndicadores;
