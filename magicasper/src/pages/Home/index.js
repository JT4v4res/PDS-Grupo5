import './index.css';
import Navbar from '../../Componentes/Navbar';
import BarGraph from "../../Componentes/GraficoBarra";
import ProgressBar from "../../Componentes/ProgressBar"

function Home (UserData, pontuacao_user, materias_cursadas,disciplinas_atual,DesempenhoDisciplinaData, materias_fazer, BarraProgressoData, pontuacoes_ganhas){
  UserData = ["Willy Wonka", "Ciência da Computação", "Universidade Federal de Alagoas", "2024.1", '4']
  pontuacao_user = 120
  materias_cursadas = 10
  materias_fazer = 20
  pontuacoes_ganhas =[
    {
      dataAvaliacao:'12/04/2024',
      disciplina:'Cálculo 1',
      nota: 4,
      dificuldade: 'média',
      pontosRecebidos:10
    },
    {
      dataAvaliacao:'12/04/2024',
      disciplina:'Cálculo 2',
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
)
};

export default Home;
