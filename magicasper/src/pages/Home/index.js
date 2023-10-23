import './index.css';
import Navbar from '../../Componentes/Navbar';
import BarGraph from "../../Componentes/GraficoBarra";
import ProgressBar from "../../Componentes/ProgressBar"
import {useContext, useState, useEffect} from "react";
import {AuthContext} from "../../context/context";
import api from "../../Componentes/apis";
import {useNavigate } from "react-router-dom";
import axios from 'axios';


function Home (UserData, pontuacao_user, materias_cursadas,disciplinas_atual,DesempenhoDisciplinaData, materias_fazer, BarraProgressoData, pontuacoes_ganhas){
  const navigate = useNavigate(); // Use a função useNavigate para navegar entre as rotas
  const { userId,storedToken,signed } = useContext(AuthContext);
  const storedTokenLocal = useState(localStorage.getItem('token'))
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [perfilAcademico, setPerfilAcademico] = useState('');
  let periodos = '';
  let periodoAtual = 1;
  console.log("ID: ", userId)

  const dadosasync = async () => {
    try {
      if (signed) {
        const { data } = await api.get(`/user/${userId}`);
        setUserData(data);
      } else if (storedToken) {
        // Se o usuário não estiver autenticado, mas o token estiver no localStorage
        const { data } = await api.get(`/user`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setUserData(data);
      }
      setLoading(false);
    } catch (e) {
      console.log('erro: ', e);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!signed && !storedTokenLocal) {
      navigate('/login');
    } else {
      dadosasync();
    }
  }, [signed, userId]);
  

  useEffect(() => {
    axios.get(`http://localhost:8080/perfilacademico/${userId}`)
      .then(response => {
        setPerfilAcademico(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar perfil acadêmico:', error);
      });
  }, []);


  if(perfilAcademico.periodData !== null || perfilAcademico.periodData !== undefined){ //Pegando os dados do pdf e jogando em periodos
    periodos = perfilAcademico.periodData
  }
  
  while (!loading && userData && userData.perfil)
  {
    let ultimoAno = 0;
    let ultimoSemestre = 0;
    let materiasPagas = [];
    let matriculaAtualFinal = ''

    if(periodos  !== null || periodos != undefined){
      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          const [ano, semestre] = periodos[periodo]['periodo'].split('/');
          const anoInt = parseInt(ano);
          const semestreInt = parseInt(semestre);

          if (anoInt > ultimoAno || (anoInt === ultimoAno && semestreInt > ultimoSemestre)) {
            ultimoAno = anoInt;
            ultimoSemestre = semestreInt;
          }
        }
      }
      ultimoAno = `${ultimoAno}.${ultimoSemestre}`;


      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          const Materias = periodos[periodo]['materiasPeriodo'];
          // Adicione as matérias deste período à lista de matérias
          materiasPagas.push(...Materias);
        }
      }
  
      // Remova a última matéria da lista (se houver alguma)
      if (materiasPagas.length > 0) {
        materiasPagas.pop();
      }
      
      console.log("materias Já pagas:", materiasPagas)
      console.log("materias Já pagas tam:", materiasPagas.length)
      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          const matriculaAtual = periodos[periodo]['materiasPeriodo'];
          matriculaAtualFinal = matriculaAtual
        }
      }
    }

    UserData = [userData.nome, userData.perfil.curso, userData.perfil.universidade, userData.semestre, periodoAtual]
    pontuacao_user =  userData.perfil.pontuacao
    materias_cursadas = materiasPagas.length
    materias_fazer = 20
    pontuacoes_ganhas = ''

    const bgcolor = "#6a1b9a";
    disciplinas_atual = Object.values(matriculaAtualFinal);
    disciplinas_atual.forEach((disciplina) => {
      disciplina.bgcolor = bgcolor;
      disciplina.completed = disciplina.Média !== null ? parseFloat(disciplina.Média) : 0;
    });
    
    console.log("ATUAIS", disciplinas_atual)

    BarraProgressoData = [
      { bgcolor: "#6a1b9a", completed: userData.perfil.progresso},
    ];
    console.log("Cursos cadastrados para progressão:", userData.perfil.universidade)

    return (
    <>
      <Navbar/>
      <div className='main-home'>
        <div className='left-side'>
          <div className='userInfo'>
            <header>Olá, {UserData[0]}</header>
            <p>Pontuação total:<span>{pontuacao_user}</span></p>
          </div>
          <div className='contribuicoesComunidade'>
            <div className='title-home'>
              <h2>Contribuições recentes à comunidade</h2>
            </div>
            {pontuacoes_ganhas.length === 0 ? (
                      <p className="centered-text">Ainda não contribuiu para a comunidade</p>
                    ) : (
                      <div className='acoesPontuadas'>
                        <ul className='lista-acoes-esq'>
                          {pontuacoes_ganhas.map((pontuacao, index) => (
                            <li key={index}>
                              <div className='content-left'>
                                <a href='/#'>Avaliação {pontuacao.dataAvaliacao}</a>
                                <a href='/#'>Disciplina: {pontuacao.disciplina}</a>
                              </div>
                              <div className='content-rigth'>
                                <label>Nota: {pontuacao.nota}</label>
                                <label>Dificuldade: {pontuacao.dificuldade}</label>
                                <label>+{pontuacao.pontosRecebidos} pontos</label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
              <div className='graph-container'>
                <BarGraph/>
              </div>
          </div>
        </div>
        <div className='rigth-side'>
          <div className='progressoCurso'>
              <header>Seu progreso no curso<br></br><span>{UserData[1]}</span></header>
              <div className='Desempenho'>
                  {BarraProgressoData.map((item, idx) => (
                              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                  ))}
              </div>
              <header>Disciplinas cursadas: {materias_cursadas}</header>
              <header>Restam: {materias_fazer}</header>
          </div>
          <div className='DesempenhoDisciplina'>
                <header>Desempenho por disciplina<br></br><span>{UserData[4]}ª Período</span> </header>
                <div className='disciplinasAtual'>
                {disciplinas_atual.length === 0 ? (
                  <p className="centered-message">
                    Insira seu <span className="highlighted-text">Histórico Analítico</span> e complete o cadastro para que as informações sejam carregadas.
                  </p>
                  ) : (
                    <ul className="lista-disciplinas">
                      {disciplinas_atual.map((disciplinas_atual) => (
                        <li>
                         
                          {disciplinas_atual['Nome']}
                          <ProgressBar key={disciplinas_atual} bgcolor={disciplinas_atual['bgcolor']} completed={disciplinas_atual['média']} />
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
          </div>
        </div>
      </div>
    </>
  )}
  
    
  return("Carregando....")
  
};

export default Home;
