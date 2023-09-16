import './index.css';
import SeletorUser from '../../Componentes/Seletor-User';
import { useRef } from 'react';

function Home (user, pontuacao_user, materias_cursadas, materias_fazer, disciplinas_atual, pontuacoes_ganhas){
  user = ["Willy Wonka", "Ciência da Computação", "Universidade Federal de Alagoas", "2024.1"]
  pontuacao_user = 120
  materias_cursadas = 10
  materias_fazer = 20

  disciplinas_atual =[
    {
      nome: 'Teoria da Computação',
      codigo: 'COMP321'
    },
    {
      nome: 'Programação 2',
      codigo: 'COMP321'
    },
    {
      nome: 'Matemática Discreta',
      codigo: 'COMP321'
    },
    {
      nome: 'Sistemas distribuidos',
      codigo: 'COMP321'
    },
    {
      nome: 'Lógica para Computação',
      codigo: 'COMP321'
    },
  ]

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
    {
      dataAvaliacao:'12/04/2024',
      disciplina:'Cálculo 1',
      nota: 4,
      dificuldade: 'média',
      pontosRecebidos:10
    },
  ]

  const filesElement = useRef(null);
  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:3000/perfil`, {
      method: 'POST',
      body: dataForm,
    });
    const data = await res.json();
    console.log(data);
  };
return (
  <>
  <div className='user-info'>
    <div className='personal-info'>
      <SeletorUser texto={user[0]}/>
      <label>{user[1]}</label>
      <label>{user[2]}</label>
      <label>Semestre: {user[3]}</label>
      <div className='btn'>
        {/* <input type="file" multiple ref={filesElement}></input> */}
        <button onClick={sendFile}>Histórico Analítico</button>
      </div>
    </div>

      <div className='info-points'>
        <div className='circle'>
          <div className='conteudo'>
            <label>Pontuação Total</label>
            <span>{pontuacao_user}</span>
          </div>
        </div>

        <div className='circle'>
          <div className='conteudo'>
            <label>Matérias Cursadas</label>
            <span>{materias_cursadas}</span>
          </div>
        </div>

        <div className='circle'>
        <div className='conteudo'>
          <label>Matérias a serem cursadas</label>
          <span>{materias_fazer}</span>
        </div>
        </div>
      </div>

      <div className='center-content'>
        <div className='matricula-info'>
          <label>Matricula atual</label>
          <hr className='horiz-line-style'></hr>
          
          <div className='disciplina-matricula'>
              <ul className='lista-disciplinas'>
                    {
                        disciplinas_atual.map(disciplinas_atual => (
                            <li>
                                <a href='/'>{disciplinas_atual.nome}</a>
                                <label>{disciplinas_atual.codigo}</label>
                            </li>
                        ))
                    }
                </ul>
          </div>
        </div>
        <div className='registro-pontuações'>
          <div className='up'>
            <label>Ultimas pontuações Ganhas</label>
            <hr className='horiz-line-style'></hr>
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
          </div>
         
          <div className='btn'>
            <a href='/#'>Ver Mais</a>
          </div>
        </div>


        <div className='informativos'>
          <div className='left'>
            <div className='card-claro'>
                <p>Avalie as matérias já cursadas Contribua para a comunidade e ganhe pontos por cada ação!</p>
            </div>
          </div>

          <div className='rigth'>
              <div className='card-claro'>
                  <p>Para que os dados sejam processados envie o seu ultimo histórico analitico</p>
              </div>
          </div>
        </div>
  

      </div>
    </div>
  </>
)
};

export default Home;