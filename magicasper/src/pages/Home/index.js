import './index.css';
import Navbar from '../../Componentes/Navbar';
import BarGraph from "../../Componentes/GraficoBarra";
import ProgressBar from "../../Componentes/ProgressBar"
import {useContext, useState, useEffect} from "react";
import {AuthContext} from "../../context/context";
import api from "../../Componentes/apis";
import {useNavigate } from "react-router-dom";

function Home (UserData, pontuacao_user, materias_cursadas,disciplinas_atual,DesempenhoDisciplinaData, materias_fazer, BarraProgressoData, pontuacoes_ganhas){
  const navigate = useNavigate(); // Use a função useNavigate para navegar entre as rotas
  const { userId,storedToken,signed } = useContext(AuthContext);
  const storedTokenLocal = useState(localStorage.getItem('token'))
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [perfilAcademico, setPerfilAcademico] = useState('');
  let periodos = '';
  let periodoAtual = 0;
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
    api.get(`/perfilacademico/${userId}`)
      .then(response => {
        setPerfilAcademico(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar perfil acadêmico:', error);
      });
  }, []);


  if(perfilAcademico.periodData !== null && perfilAcademico.periodData !== undefined){ //Pegando os dados do pdf e jogando em periodos
    periodos = perfilAcademico.periodData
  }
  
  while (!loading && userData && userData.perfil)
  {
    let ultimoAno = 0;
    let ultimoSemestre = 0;
    let materiasPagas = [];
    let matriculaAtualFinal = ''
    let materiasAfazer =0

    if(periodos  !== null && periodos !== undefined){
      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          const [ano, semestre] = periodos[periodo]['periodo'].split('/');
          const anoInt = parseInt(ano);
          const semestreInt = parseInt(semestre);

          if (anoInt > ultimoAno || (anoInt === ultimoAno && semestreInt > ultimoSemestre)) {
            ultimoAno = anoInt;
            ultimoSemestre = semestreInt;
          }
          else{
            periodoAtual +=1;
          }
        }
      }
      if(periodoAtual < 0) {periodoAtual=0}
      ultimoAno = `${ultimoAno}.${ultimoSemestre}`;


      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          const Materias = periodos[periodo]['materiasPeriodo'];
          // Adicione as matérias deste período à lista de matérias
          materiasPagas.push(...Materias);
        }
      }
  
      if (materiasPagas.length > 0) {
        materiasPagas.pop();
      }

      let penultima =''
      let matriculaAtual=''
      for (const periodo in periodos) {
        if (periodos.hasOwnProperty(periodo)) {
          penultima = matriculaAtual
          matriculaAtual = periodos[periodo]['materiasPeriodo'];
          console.log("matricula a cada interação: ", matriculaAtual)
          matriculaAtualFinal = penultima
        }
      }

    
    }
    
    for (const periodo in periodos) {
      if (periodos.hasOwnProperty(periodo)) {
        const materias = periodos[periodo]['materiasPeriodo'];

        
        for(const materia in materias){
          console.log("asdasdasd", materia)
            if(materias[materia]['Conceito'] === 'AP')
            {
              materiasAfazer+=1;
            }
        }
      }
    }

    materiasAfazer -= 25;
    if(materiasAfazer < 0){materiasAfazer = 0}

    UserData = [userData.nome, userData.perfil.curso, userData.perfil.universidade, userData.semestre, periodoAtual]
    pontuacao_user =  userData.perfil.pontuacao
    materias_cursadas = materiasPagas.length
    materias_fazer = materiasAfazer
    pontuacoes_ganhas = userData.valuations
    let totalMaterias = materias_fazer+materias_cursadas

    const bgcolor = "#6a1b9a";
    disciplinas_atual = Object.values(matriculaAtualFinal);
    disciplinas_atual.forEach((disciplina) => {
      disciplina.bgcolor = bgcolor;
      disciplina.completed = disciplina.Média !== null ? parseFloat(disciplina.Média) : 0;
    });
    
    console.log("ATUAIS", disciplinas_atual)

    BarraProgressoData = [
      { bgcolor: "#6a1b9a", completed: ((materias_cursadas/totalMaterias)*100).toFixed(1)},
    ];
    console.log("Cursos cadastrados para progressão:",  (materias_cursadas/totalMaterias)*100)

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
                                <a href='/#'>Avaliação {pontuacao.createdAt.slice(0,10)}</a>
                                <a href='/#'>Disciplina: {pontuacao.materia.nome}</a>
                              </div>
                              <div className='content-rigth'>
                                <label>Nota: {pontuacao.nota_avaliacao}</label>
                                <label>Dificuldade: {pontuacao.materia.nivelEsforco}</label>
                                <label>+{50} pontos</label>
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
                <header>Desempenho por disciplina<br></br><span>{UserData[4]}ª Período (Semestre passado)</span> </header>
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
                          <ProgressBar key={disciplinas_atual} bgcolor={disciplinas_atual['bgcolor']} completed={(parseFloat((disciplinas_atual['Média'])))*10 } />
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
