import './index.css';
import SeletorUser from '../../Componentes/Seletor-User';
import React, { useState, useRef,useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../Componentes/Navbar';
import Trofeus from '../../Componentes/trofeus';
import api from "../../Componentes/apis";
import alunoJSON from "../../Componentes/PdfExtractor/aluno.json";
import {AuthContext} from "../../context/context";
import {useContext} from "react";
import axios from 'axios';




function Perfil (user, pontuacao_user, materias_cursadas, materias_fazer, disciplinas_atual, pontuacoes_ganhas, diciplinas_avaliar){
  const [files, setFiles] = useState([]); // Alterei o nome de 'file' para 'files'
  const { signed } = useContext(AuthContext);
  const { storedToken } = useContext(AuthContext);
  const storedTokenLocal = useState(localStorage.getItem('token'))
  const inputFile = useRef(null);
  const { userId } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  let periodos = '';
  const navigate = useNavigate(); // Use a função useNavigate para navegar entre as rotas
  const [perfilAcademico, setPerfilAcademico] = useState('');


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

  console.log("userdata:",userData)
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
  
  console.log("PDF DATA:", perfilAcademico)
  while (!loading && userData!== null && userData.perfil)
  {
        
    console.log("Periodos:",periodos)

    let ultimoAno = 0;
    let ultimoSemestre = 0;
    let materiasPagas = [];
    let matriculaAtualFinal = ''

    if(periodos  !== null){
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
      ultimoAno = `${ultimoAno}.${ultimoSemestre}`


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
    user = [userData.nome, userData.perfil.curso, userData.perfil.universidade, ultimoAno]
    pontuacao_user = userData.perfil.pontuacao
    materias_fazer = 20
    materias_cursadas = materiasPagas.length
    diciplinas_avaliar= materiasPagas
    disciplinas_atual = matriculaAtualFinal

    pontuacoes_ganhas =''
    console.log("Para avaliar:", diciplinas_avaliar)

  
    const handleChange = async (e) => {
      const selectedFile = e.target.files[0];
      const allowedExtensions = ["pdf"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    
      if (allowedExtensions.includes(fileExtension)) {
        setFiles((prevFiles) => [
          ...prevFiles,
          { id: Date.now(), file: selectedFile },
        ]);
        let profileId = userId

        try {
          const formData = new FormData();
          formData.append('file', selectedFile);
    
          // Fazer a solicitação POST usando Axios
          const response = await axios.post(`http://localhost:8080/pdf/upload/${profileId}`, formData);
    
          // Se a solicitação foi bem-sucedida, você pode lidar com a resposta do servidor aqui
          console.log('Resposta do servidor:', response.data);
        } catch (error) {
          // Se ocorrer um erro durante a solicitação POST, você pode lidar com ele aqui
          console.error('Erro ao enviar o arquivo:', error);
        }
      } else {
        alert("Erro no tipo de arquivo, precisa ser um arquivo PDF");
      }
    };
    
    const removeFile = (id) => {
     
        axios.get(`http://localhost:8080/perfilacademico/${userId}`)
          .then(response => {
            setPerfilAcademico(response.data);
          })
          .catch(error => {
            console.error('Erro ao buscar perfil acadêmico:', error);
          });
  
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    }; 
  
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
                          <a href="/#">{disciplinas_atual['Nome']}</a>
                          <label>{disciplinas_atual['Código']}</label>
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
                    <li key={disciplina['id']}>
                      <Link to={`./../AvaliacaoMateria/${disciplina['id']}`}>{disciplina['Nome']}</Link>
                    </li>
                  ))
                )}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
)}

    console.log("ID do usuário :", userId)
    console.log("token do usuário :", storedToken)
    return("Carregando...")

};

export default Perfil;