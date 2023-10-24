import './index.css';
import Dropdown from '../Dropdown';
import React, {useContext, useState} from 'react';
import { Link,useParams, useNavigate} from 'react-router-dom';
import {diciplinas_avaliar} from './data'
import api from "../../Componentes/apis";
import {AuthContext} from "../../context/context";

let materiasDoBanco;
let post;
let avaliacaoDidatica = ['desorganizada', 'monótona', 'adaptável', 'claro', 'envolvente']
api.get(`/materia`)
    .then((res) => {
      materiasDoBanco = res.data;
    });
    

const items = [
  {
    id: 1,
    value: '1ª',
  },
  {
    id: 2,
    value: '2ª',
  },
  {
    id: 3,
    value: '3ª',
  },
  {
    id: 4,
    value: '4ª',
  },
  {
    id: 5,
    value: '5ª',
  },
];

const opcoesParaNumeros = {
  desorganizada: 1,
  monotona: 2,
  adaptavel: 3,
  clara: 4,
  envolvente: 5,
  baixo: 6,
  medio: 7,
  alto: 8,
  sim: 9,
  nao:10,
  asvezes:11,
  desconexo: 12,
  limitado: 13,
  justo: 14,
  formativo: 15,
  abrangente: 16,
  Periodo: 6
};


const FormularioAvaliacao = () => {
  const { Materiaid } = useParams();
  const {userId} = useContext(AuthContext);
  const history = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // Variável de estado para mensagem de erro

  materiasDoBanco.map((element) => {
    if(element.materiaId === Materiaid){
      console.log("Iguakl")
      post = element.id;
    }
  }
);
  const [formData, setFormData] = useState({
    didatica: '',
    tempo: '',
    presenca: '',
    avaliacao: '',
    periodo: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    api.post('/avaliation', {
      userId: parseInt(userId),
      semestre: "2023.1",
      nota_avaliacao: 3,
      nota_materia: 4,
      passou_sem_final: true,
      didatica: opcoesParaNumeros[formData.didatica],
      dedicacao: opcoesParaNumeros[formData.tempo],
      presenca: opcoesParaNumeros[formData.presenca],
      metodologia: opcoesParaNumeros[formData.avaliacao],
      periodo: 3,
      recomenda_no_inicio: false,
      isMateria: true,
      isTeacher: false,
      relationshipId: parseInt(Materiaid),
      primeira_aprovacao: true
    })
    .then((response) => {
      if (response.status === 201) {
        history(`../../AvaliacaoGeral/${Materiaid}`); 
      } else {
        setErrorMessage('Todos os itens do formulário são obrigatórios');
        console.error('Erro no post do formulário');
      }
    })
    .catch((error) => {
      setErrorMessage('Todos os itens do formulário são obrigatórios');

      console.error('Erro na chamada à API', error);
    });
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <div className='title-form'>
        <h3>Fórmulário de Opnião</h3>
        <p>Avalie as perguntas abaixo e ajude a comunidade crescrer, lembre que todas essas informações serão usadas para auxiliar futuros alunos.</p>
      </div>
      <div className='questions'>
        <div className='form-group'>
            <label >Didática do professor</label><br></br>
            <div className='lista-form'>
            <div className='item'>
              <input
                type="radio"
                id="desorganizada"
                name="didatica"
                value="desorganizada"
                checked={formData.didatica === 'desorganizada'}
                onChange={handleChange}
              />
            <label className='resposta' htmlFor="desorganizada">desorganizada</label>
          </div>
              <div className='item'>
                <input
                type="radio"
                id="monotona"
                name="didatica"
                value="monotona"
                checked={formData.didatica === 'monotona'}
                onChange={handleChange}
              />
                <label  className='resposta' htmlFor="monotona">monótona</label>
              </div>
              <div className='item'>
                <input
                  type="radio"
                  id="adaptavel"
                  name="didatica"
                  value="adaptavel"
                  checked={formData.didatica === 'adaptavel'}
                  onChange={handleChange}
                />
                <label  className='resposta' htmlFor="adaptavel">adaptável</label>
              </div>
              <div className='item'>
                <input
                    type="radio"
                    id="clara"
                    name="didatica"
                    value="clara"
                    checked={formData.didatica === 'clara'}
                    onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="clara">clara</label>
              </div>
              <div className='item'>
                  <input
                    type="radio"
                    id="envolvente"
                    name="didatica"
                    value="envolvente"
                    checked={formData.didatica === 'envolvente'}
                    onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="envolvente">envolvente</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label >Quanto tempo de dedicação a disciplina necessita?</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                  <input
                    type="radio"
                    id="baixo"
                    name="tempo"
                    value="baixo"
                    checked={formData.tempo === 'baixo'}
                    onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="baixo"> baixo</label>
              </div>
              <div className='item'>
                <input
                      type="radio"
                      id="medio"
                      name="tempo"
                      value="medio"
                      checked={formData.tempo === 'medio'}
                      onChange={handleChange}
                />
                <label  className='resposta' htmlFor="medio"> médio</label>
              </div>
              <div className='item'>
                <input
                      type="radio"
                      id="alto"
                      name="tempo"
                      value="alto"
                      checked={formData.tempo === 'alto'}
                      onChange={handleChange}
                />
                <label  className='resposta' htmlFor="alto"> alto</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label>Professor cobra presença?</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                <input
                        type="radio"
                        id="sim"
                        name="presenca"
                        value="sim"
                        checked={formData.presenca === 'sim'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="sim"> sim</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="asvezes"
                        name="presenca"
                        value="asvezes"
                        checked={formData.presenca === 'asvezes'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="asvezes"> ás vezes</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="nao"
                        name="presenca"
                        value="nao"
                        checked={formData.presenca === 'nao'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="nao"> não</label>
              </div>
            </div>
        </div>

        <div className='form-group'>
            <label>Métodos de avaliação</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                  <input
                        type="radio"
                        id="desconexo"
                        name="avaliacao"
                        value="desconexo"
                        checked={formData.avaliacao === 'desconexo'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="desconexo">desconexo</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="limitado"
                        name="avaliacao"
                        value="limitado"
                        checked={formData.avaliacao === 'limitado'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="limitado">limitado</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="justo"
                        name="avaliacao"
                        value="justo"
                        checked={formData.avaliacao === 'justo'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="justo">justo</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="formativo"
                        name="avaliacao"
                        value="formativo"
                        checked={formData.avaliacao === 'formativo'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="formativo">formativo</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="abrangente"
                        name="avaliacao"
                        value="abrangente"
                        checked={formData.avaliacao === 'abrangente'}
                        onChange={handleChange}
                  />
                <label  className='resposta' htmlFor="abrangente">abrangente</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label>Em qual periodo  é recomendável pagar essa disciplina? </label><br></br>
            <Dropdown title="Período" items={items} />
        </div>
      </div>
      {errorMessage && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: 'red', margin: '0' }}>{errorMessage}</p>
                    </div>
                )}
      <div className='btn-form'>
        <button type='submit'>Continuar</button>
      </div>
    </form>
  )
};

export default FormularioAvaliacao;