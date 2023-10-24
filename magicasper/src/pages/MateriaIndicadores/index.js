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

function MateriaIndicadores (materia, codigo, dadosIndicadores, nivelEsforco, ratingStar, informativos){

  const {Materiaid} = useParams();
  let post;
  // console.log("esse:", getMateriasDetalhes)
  console.log("Id url indicadores:", Materiaid)
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const dadosasync = async () => {
      const dados = await api
      .get(`/materia/${Materiaid}`)
      .then((res) => {
        setData(res.data);
        console.log('Resquest data: ', res.data);
          }).catch((e) => {
            console.log('erro: ', e);
          });
      console.log('async')

      // setData(dados);
    }
    
    dadosasync();
  }, [Materiaid]);
  

  
  console.log('Dados requisição atualizada: ', post);
  
  if (data !== undefined && data !== null)
  {
    materia = data.nome;
    codigo = data.codigo;
    nivelEsforco = data['avaliacoes'][0].nivelEsforco;
    ratingStar = data['avaliacoes'][0].nota_avaliacao;
    dadosIndicadores = [`Cerca de ${(data['avaliacoes'][0].didatica)*5}% dos alunos são aprovados na 1ª tentativa`,
        `${(data['avaliacoes'][0].metodologia)*5}%  não recomendam pegar  essa matéria se não viu o básico de programação`,
        `${(data['avaliacoes'][0].nota_materia)*5}% afirmam que o seu professor foi didático`,
        `${(data['avaliacoes'][0].metodologia)*5}% dos usuários já concluíram essa matéria`,
        `${(data['avaliacoes'][0].presenca)*5}% dos alunos recomendam essa matéria no inicio do curso`,
        `${(data['avaliacoes'][0].periodo)*5}% afirmam que essa matéria requer muito tempo de dedicação`];
    informativos = [`Última avaliação: ${data['avaliacoes'][0].updatedAt.slice(0, 10)}`, `Cerca de ${(data['avaliacoes'][0].metodologia)*3} alunos avaliaram esta materia`];
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
