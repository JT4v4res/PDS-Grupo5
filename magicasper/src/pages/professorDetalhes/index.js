import './index.css';
import SideBar from '../../Componentes/SideBar';
import SeletorCurso from "../../Componentes/Seletor-Curso";
import BarGraph from "../../Componentes/GraficoBarra";
import Navbar from '../../Componentes/Navbar';
import {useParams} from "react-router-dom"
import api from "../../Componentes/apis";
import {useEffect, useState} from "react";

// Tela que aparecerá as informações de cada professor na disciplina

function ProfessorDetalhes (professor, materia, lattes, codigo, desc_materia, tempoMinistrando, desc_professor, dadosIndicadoresProfessor){
  const {Materiaid} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [materiaDesc, setMateria] = useState(null);
    const [professorData, setprofessorData] = useState(null);

    const dadosasync = async () => {
        try {
            const {data } = await api
                .get(`/materia/${Materiaid}`)

            setMateria(data);

            const {professores} = data
            setData(professores)
        }catch (e) {
            console.log('erro: ', e);
        }

    }


    console.log("PROFESSOR:", data)
    useEffect(() => {

        dadosasync();
    }, [Materiaid]);


    const dadosasyncprof = async () => {
      try {
          const {data } = await api
              .get(`/professor`)

          const {professores} = data
          setprofessorData(professores)
      }catch (e) {
          console.log('erro: ', e);
      }

  }

  console.log("PROFESSOR:", professorData)
  useEffect(() => {

      dadosasyncprof();
  }, [Materiaid]);

    if (data !== undefined && data !== null)
    {
        console.log('not null')

        professor = data[0].nome;
        materia = materiaDesc.nome;
        codigo = materiaDesc.codigo;
        lattes = data[0].lattes;
        desc_materia = materiaDesc.descricao;
        desc_professor = data[0].descricao.substring(0,200);
        tempoMinistrando = 4
        dadosIndicadoresProfessor = [`${Math.floor((Math.random() * (100 - 30) + 1))}%  consideram o método de avaliação como "formativo"`,
            `${Math.floor((Math.random() * (100 - 30) + 1))}%  afirmam que a didática é “adaptável”`,
            `${Math.floor((Math.random() * (100 - 30) + 1))}%  reportaram  cobrança de presença` ]
      return (
        <>
          <Navbar />
          <div className='page-content'>
            <div className='title-content'>
              <SideBar/>
            <label className='professor-name' key={professor}>{professor}</label>
            </div>
            <div className='lattes'>
              <a href={lattes} target='_blank' rel="noreferrer noopener nofollow">{lattes}</a>
            </div>
            <div className='main-content'>
              <div className='left-content'>
                <div className='materia-info'>
                    <div className='nome-materia'>
                      <SeletorCurso texto={materia}/>
                    </div>
                    <div className='codigo-1'>
                      <label key={codigo}>Código: {codigo}</label>
                    </div>
                    <p>{desc_materia}</p>
                </div>
              <div className='horiz-line'></div>
                <div className='professor-info'>
                    <div className='tempo-ministrado'>
                        <label>{tempoMinistrando} semestres ministrando a disciplina</label>
                    </div>
                    <p key={desc_professor}>{desc_professor}</p>
                </div>
              </div>

              <div className='vertical-line'></div>
              
              <div className='rigth-content'>
                <div className='graph-container'>
                  <BarGraph/> 
                </div>
                <div className='informacoes-relevantes'>
                  <label>Informações relevantes</label>
                  <div className='title-barra-inferior'/> 
                  <div className='cards-2'>
                    <ul className="dados-indicadores">
                          {
                              dadosIndicadoresProfessor.map(dadosIndicadoresProfessor => (
                                  <li>
                                      <a href='#'>{dadosIndicadoresProfessor}</a>
                                  </li>
                              ))
                          }
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      else{
          return ('Carregando...');
      }
};

export default ProfessorDetalhes;
