import './index.css';
import SeletorUser from '../../Componentes/Seletor-User';
import { Link } from "react-router-dom"
import React, { useState, useRef,useEffect } from "react"; 
// import * as FiIcons from "react-icons/fi"
import Navbar from '../../Componentes/Navbar';
import Trofeus from '../../Componentes/trofeus';
import api from "../../Componentes/apis";
import alunoJSON from "../../Componentes/PdfExtractor/aluno.json";
import {AuthContext} from "../../context/context";
import {useContext} from "react";
// import extrairInfoDePDF from "../../Componentes/PdfExtractor/pdfAnalyser"; // Importe o módulo pdfAnalyser




function Perfil (user, pontuacao_user, materias_cursadas, materias_fazer, disciplinas_atual, pontuacoes_ganhas, diciplinas_avaliar){
  const [files, setFiles] = useState([]); // Alterei o nome de 'file' para 'files'
  
  const inputFile = useRef(null);
  const { userId } = useContext(AuthContext);
  // let [userData, setUser] = useState();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const periodos = alunoJSON.periodos;
  
  // const cargaHoraria = alunoJSON.semestre

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

  if (!loading)
  {
        
    console.log("Periodos:",periodos)
   

    let ultimoAno = 0;
    let ultimoSemestre = 0;
    
    for (const periodo in periodos) {
      if (periodos.hasOwnProperty(periodo)) {
        const [ano, semestre] = periodo.split('/');
        const anoInt = parseInt(ano);
        const semestreInt = parseInt(semestre);
    
        if (anoInt > ultimoAno || (anoInt === ultimoAno && semestreInt > ultimoSemestre)) {
          ultimoAno = anoInt;
          ultimoSemestre = semestreInt;
        }
      }
    }
    ultimoAno = `${ultimoAno}.${ultimoSemestre}`


    user = [userData.nome, userData.perfil.curso, userData.perfil.universidade, ultimoAno]
    pontuacao_user = userData.perfil.pontuacao
    materias_fazer = 20
    materias_cursadas = 0
    diciplinas_avaliar=''
    // diciplinas_avaliar =[
    //   {
    //     id: '001',
    //     nome: 'Programação 1',
    //     codigo: 'Comp445',
    //     professor: 'Ferreira',
    //     semestre: '2024.1'
    //   },
    //   {
    //     id: '002',
    //     nome: 'Cálculo 1',
    //     codigo: 'Comp445',
    //     professor: 'Matheus',
    //     semestre: '2024.1'
    //   },
    //   {
    //     id: '003',
    //     nome: 'Introdução a computação',
    //     codigo: 'Comp445',
    //     professor: 'Ferreira',
    //     semestre: '2024.1'
    //   },
    //   {
    //     id: '004',
    //     nome: 'Ciência de dados',
    //     codigo: 'Comp445',
    //     professor: 'Ferreira',
    //     semestre: '2024.1'
    //   },
    //   {
    //     id: '005',
    //     nome: 'Geometria Analitica',
    //     codigo: 'Comp445',
    //     professor: 'Ferreira',
    //     semestre: '2024.1'
    //   },
    //   {
    //     id: '006',
    //     nome:  'Computação e ética',
    //     codigo: 'Comp445',
    //     professor: 'Ferreira',
    //     semestre: '2024.1'
    //   },
    // ]
    disciplinas_atual = ''
    // disciplinas_atual =[
    //   {
    //     nome: 'Teoria da Computação',
    //     codigo: 'COMP321'
    //   },
    //   {
    //     nome: 'Programação 2',
    //     codigo: 'COMP321'
    //   },
    //   {
    //     nome: 'Matemática Discreta',
    //     codigo: 'COMP321'
    //   },
    //   {
    //     nome: 'Sistemas distribuidos',
    //     codigo: 'COMP321'
    //   },
    //   {
    //     nome: 'Lógica para Computação',
    //     codigo: 'COMP321'
    //   },
    // ]
    pontuacoes_ganhas =''

    // pontuacoes_ganhas =[
    //   {
    //     dataAvaliacao:'28/09/2023',
    //     disciplina:'Compiladores',
    //     nota: 4,
    //     dificuldade: 'média',
    //     pontosRecebidos:10
    //   },
    //   {
    //     dataAvaliacao:'28/09/2023',
    //     disciplina:'Inteligência Artificial',
    //     nota: 5,
    //     dificuldade: 'facil',
    //     pontosRecebidos:15
    //   },
    //   {
    //     dataAvaliacao:'28/09/2023',
    //     disciplina:'Estruturas de Dados',
    //     nota: 4,
    //     dificuldade: 'média',
    //     pontosRecebidos:10
    //   },
    // ]
  
    const handleChange = (e) => {
      const selectedFile = e.target.files[0];
      const allowedExtensions = ["pdf"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    
      if (allowedExtensions.includes(fileExtension)) {
        setFiles((prevFiles) => [
          ...prevFiles,
          { id: Date.now(), file: selectedFile },
        ]);
        //Chamando a função pra criar o json
        // extrairInfoDePDF(selectedFile); 
      } else {
        alert("Erro no tipo de arquivo, precisa ser um arquivo PDF");
      }
    };
    
    const removeFile = (id) => {
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    }; 
    for (const periodo in periodos) {
      if (periodos.hasOwnProperty(periodo)) {
        const numDisciplinas = periodos[periodo]['Número de Disciplinas'];
        console.log("num:",numDisciplinas)
        materias_cursadas += numDisciplinas;
      }
    }

    console.log("materias:",materias_cursadas)
    //infos do json do pdf
    console.log("Arquivo PDF", files[0])
    // if(files !== undefined){

    //   const nomeDoArquivo = files[0].file.name; // "historico-analitico-19211606.pdf"
    //   const tipoDeArquivo = files[0].file;
    //   console.log("nomeDoArquivo:", nomeDoArquivo)
    //   console.log("tipodeArquivo:", tipoDeArquivo)
    // }
    
  return (
    <>
    <Navbar/>

    <div className='user-info'>
      <div className='personal-info'>
        <div className='userlogout'>
          <SeletorUser texto={user[0]}/>
          <Trofeus pontos={pontuacao_user}/>
        </div>
        <div className='user-details'>
          <label>{user[1]}</label>
          <label>{user[2]}</label>
          <label>Semestre: {user[3]}</label>
        </div>
        <div className="btn">
              <button onClick={() => inputFile.current.click()}>
                <img src="https://www.svgrepo.com/show/12604/paper-clip.svg" alt="Anexar arquivo" />
                <strong>Histórico Analítico</strong>
              </button>

              <input type="file" onChange={handleChange} ref={inputFile} />

              {files.map((file) => (
                <span key={file.id}>
                  {file.file.name}
                  <button onClick={() => removeFile(file.id)}>Excluir</button>
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
            
            <div className="disciplina-matricula">
                  {disciplinas_atual.length === 0 ? (
                  <p className="centered-message">
                    Insira seu <span className="highlighted-text">Histórico Analítico</span> e complete o cadastro para que as informações sejam carregadas.
                  </p>
                  ) : (
                    <ul className="lista-disciplinas">
                      {disciplinas_atual.map((disciplinas_atual) => (
                        <li>
                          <a href="/#">{disciplinas_atual.nome}</a>
                          <label>{disciplinas_atual.codigo}</label>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
          </div>
          <div className='registro-pontuações'>
            <div className='up'>
              <label>Últimas pontuações ganhas</label>
              <hr className='horiz-line-style'></hr>
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
                {diciplinas_avaliar.length === 0 ? (
                  <p className="centered-text">Insira seu histórico analítico para que os dados sejam carregados</p>
                ) : (
                  diciplinas_avaliar.map(disciplina => (
                    <li key={disciplina.id}>
                      <Link to={`./../AvaliacaoMateria/${disciplina.id}`}>{disciplina.nome}</Link>
                    </li>
                  ))
                )}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
)}else{
    return("Carregando...")
  }
};

export default Perfil;