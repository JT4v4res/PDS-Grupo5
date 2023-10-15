import './index.css';
import SeletorUser from '../../Componentes/Seletor-User';
import { Link ,   useParams} from "react-router-dom"
import React, { useState, useRef } from "react"; 
import * as FiIcons from "react-icons/fi"
import Navbar from '../../Componentes/Navbar';
import Trofeus from '../../Componentes/trofeus';

function Perfil (user, pontuacao_user, materias_cursadas, materias_fazer, disciplinas_atual, pontuacoes_ganhas, diciplinas_avaliar){
  const { Materiaid } = useParams();
  console.log("Id no perfil: ",Materiaid)
  user = ["Willy Wonka", "Ciência da Computação", "Universidade Federal de Alagoas", "2024.1"]
  pontuacao_user = 320
  materias_cursadas = 10
  materias_fazer = 20
  diciplinas_avaliar =[
    {
      id: '001',
      nome: 'Programação 1',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '002',
      nome: 'Cálculo 1',
      codigo: 'Comp445',
      professor: 'Matheus',
      semestre: '2024.1'
    },
    {
      id: '003',
      nome: 'Introdução a computação',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '004',
      nome: 'Ciência de dados',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '005',
      nome: 'Geometria Analitica',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
    {
      id: '006',
      nome:  'Computação e ética',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    },
  ]
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
      dataAvaliacao:'1/07/2024',
      disciplina:'Ciência de dados',
      nota: 5,
      dificuldade: 'facil',
      pontosRecebidos:15
    },
    {
      dataAvaliacao:'08/04/2024',
      disciplina:'Física 1',
      nota: 4,
      dificuldade: 'média',
      pontosRecebidos:10
    },
  ]
  const [files, setFiles] = useState([]); // Alterei o nome de 'file' para 'files'
  const inputFile = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFiles((prevFiles) => [
      ...prevFiles,
      { id: Date.now(), file: selectedFile }, // Adicionando um identificador único
    ]);
  };

  const removeFile = (id) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };
  

  console.log("ID:", Materiaid)
return (
  <>
  <Navbar />

  <div className='user-info'>
    <div className='personal-info'>
      <div className='userlogout'>
         <SeletorUser texto={user[0]}/>
         <Trofeus pontos={pontuacao_user}/>
         <FiIcons.FiLogOut className='icon-logout'/>
      </div>
      <div className='user-details'>
        <label>{user[1]}</label>
        <label>{user[2]}</label>
        <label>Semestre: {user[3]}</label>
      </div>
      <div className="btn">
            <button onClick={() => inputFile.current.click()}>
              <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" alt="Anexar arquivo" />
            </button>
            <strong>Histórico Analítico</strong>

            <input type="file" onChange={handleChange} ref={inputFile} />

            {files.map((file) => (
              <span key={file.id}>
                {file.file.name}
                <button onClick={() => removeFile(file.id)}>X</button>
              </span>
            ))}
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
          <label>Matrícula atual</label>
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
            <label>Últimas pontuações ganhas</label>
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
        
        <div className='bottom-content'>

          <label><span>Disciplinas</span> a serem avaliadas</label>
          
          <div className='diciplinas-avaliar'>

            <ul className='lista-disciplinas'>
                      {
                          diciplinas_avaliar.map(diciplinas_avaliar => (
                              <li>
                                <Link to={`./../AvaliacaoMateria/${diciplinas_avaliar.id}`}>{diciplinas_avaliar.nome}</Link>
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

export default Perfil;