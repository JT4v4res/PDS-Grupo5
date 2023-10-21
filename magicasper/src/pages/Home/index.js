import './index.css';
import Navbar from '../../Componentes/Navbar';
import BarGraph from "../../Componentes/GraficoBarra";
import ProgressBar from "../../Componentes/ProgressBar"
import {useContext, useState, useEffect} from "react";
import {AuthContext} from "../../context/context";
import api from "../../Componentes/apis";
import * as FiIcons from "react-icons/fi"
import { Link } from 'react-router-dom';
function Home (UserData, pontuacao_user, materias_cursadas,disciplinas_atual,DesempenhoDisciplinaData, materias_fazer, BarraProgressoData, pontuacoes_ganhas){
  // const { signed } = useContext(AuthContext);

  const { userId } = useContext(AuthContext);
  // let [userData, setUser] = useState();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("ID: ", userId)

  useEffect(() => {
    const dadosasync = async () => {
      try {
        let { data } = await api.get(`/user`);
  
        data.forEach(element => {
          if (userId === element.id) {
            data = element;
          }
        });
  
        setUserData(data); // update o estado com os dados obtidos
        setLoading(false);   // Defina o estado de carregamento como falso
      } catch (e) {
        console.log('erro: ', e);
        setLoading(false); // Em caso de erro,  defina o estado de carregamento como falso
      }
    };
  
    dadosasync();
  }, [userId]);
  

console.log("Api data: ",userData)
// const myData = userData
// let FinalUserData =''
// myData.forEach(element => {
//   if(userId === element.id){
//     FinalUserData = element;
//   }
// });

  if (!loading)
  {
   
    UserData = [userData.nome, userData.perfil.curso, userData.perfil.universidade, userData.semestre, '']
    pontuacao_user =  userData.perfil.pontuacao
    materias_cursadas = 10
    materias_fazer = 20
    pontuacoes_ganhas =[
      {
        dataAvaliacao:'28/09/2023',
        disciplina:'Inteligência artificial',
        nota: 4,
        dificuldade: 'média',
        pontosRecebidos:10
      },
      {
        dataAvaliacao:'28/09/2023',
        disciplina:'Compiladores',
        nota: 5,
        dificuldade: 'facil',
        pontosRecebidos:15
      },
    ]
    disciplinas_atual =[
      {
        nome: 'Teoria da Computação',
        codigo: 'COMP321',
        bgcolor: "#6a1b9a",
        completed: 60 
      },
      {
        nome: 'Programação 2',
        codigo: 'COMP321',
        bgcolor: "#00695c", 
        completed: 30
      },
      {
        nome: 'Matemática Discreta',
        codigo: 'COMP321',
        bgcolor: "#38a7ff", 
        completed: 93
      },
      {
        nome: 'Sistemas distribuidos',
        codigo: 'COMP321',
        bgcolor: "#ef6c00", 
        completed: 53
      },
      {
        nome: 'Lógica para Computação',
        codigo: 'COMP321',
        bgcolor: "#afcd00", 
        completed: 73   
      },
    ]

    BarraProgressoData = [
      { bgcolor: "#6a1b9a", completed: 60 },
    ];
    

    return (
    <>
      <Navbar/>
      <div className='main-home'>
        <div className='left-side'>
          <div className='userInfo'>
            {/* <Link to ='/Login'>
              <FiIcons.FiLogOut className='icon-logout'/>
            </Link> */}
            <header>Olá, {UserData[0]}</header>
            <p>Pontuação total:<span>{pontuacao_user}</span></p>
          </div>
          <div className='contribuicoesComunidade'>
            <div className='title-home'>
              <h2>Contribuições recentes à comunidade</h2>
              {/* <div className='linha-rosa'/> */}
            </div>
            <div className='acoesPontuadas'>
                  <ul className='lista-acoes-esq'>
                        {
                            pontuacoes_ganhas.map(pontuacoes_ganhas => (
                                <li>
                                  <div className='content-left'>
                                    <a href='/#'>Avaliação {pontuacoes_ganhas.dataAvaliacao}</a>
                                    <a href='/#'>Disciplina: {pontuacoes_ganhas.disciplina}</a>
                                  </div>
                                  <div className='content-rigth'>
                                    <label>Nota: {pontuacoes_ganhas.nota}</label>
                                    <label>Dificuldade: {pontuacoes_ganhas.dificuldade}</label>
                                    <label>+{pontuacoes_ganhas.pontosRecebidos} pontos</label> 
                                  </div>
                                </li>
                            ))
                        }
                    </ul>
              </div>
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
                  <ul className='lista-disciplinas'>
                        {
                            disciplinas_atual.map(disciplinas_atual => (
                                <li>
                                    {disciplinas_atual.nome}
                                    <ProgressBar key={disciplinas_atual} bgcolor={disciplinas_atual.bgcolor} completed={disciplinas_atual.completed} />
                                </li>
                            ))
                        }
                    </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  )}
  else{
    return("Carregando....")
  }
};

export default Home;
