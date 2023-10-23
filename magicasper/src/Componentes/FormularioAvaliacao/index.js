import './index.css';
import Dropdown from '../Dropdown';
import React, { useState } from 'react';
import { Link,useParams} from 'react-router-dom';
import {diciplinas_avaliar} from './data'
import api from "../../Componentes/apis";

let materiasDoBanco;
let post;

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


const FormularioAvaliacao= ({history})=>{
  const {Materiaid} = useParams();
  console.log('ID', Materiaid)
  
  materiasDoBanco.map((element) => {
    if(element.materiaId == Materiaid){
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

    try {
      // Envie os dados do formulário para o backend
      const response = await fetch('URL_DO_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Sucesso no envio, redirecione para a próxima página
        history.push('/AvaliacaoGeral');
      } else {
        // Lida com erros no envio
        console.error('Erro ao enviar o formulário');
      }
    } catch (error) {
      // Lida com erros de rede ou outros erros
      console.error('Erro de rede:', error);
    }
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
                id="monótona"
                name="didatica"
                value="monótona"
                checked={formData.didatica === 'monótona'}
                onChange={handleChange}
              />
                <label  className='resposta' for="monótona">monótona</label>
              </div>
              <div className='item'>
                <input
                  type="radio"
                  id="adaptável"
                  name="didatica"
                  value="adaptável"
                  checked={formData.didatica === 'adaptável'}
                  onChange={handleChange}
                />
                {/* <input type="radio" id="adaptável" name="didatica" value="adaptável"/> */}
                <label  className='resposta' for="adaptável">adaptável</label>
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
                {/* <input type="radio" id="clara" name="didatica" value="clara"/> */}
                <label  className='resposta' for="clara">clara</label>
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
                {/* <input type="radio" id="envolvente" name="didatica" value="envolvente"/> */}
                <label  className='resposta' for="envolvente">envolvente</label>
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
                {/* <input type="radio" id="baixo" name="tempo" value="baixo"/> */}
                <label  className='resposta' for="baixo"> baixo</label>
              </div>
              <div className='item'>
                <input
                      type="radio"
                      id="médio"
                      name="tempo"
                      value="médio"
                      checked={formData.tempo === 'médio'}
                      onChange={handleChange}
                />
                <label  className='resposta' for="médio"> médio</label>
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
                <label  className='resposta' for="alto"> alto</label>
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
                {/* <input type="radio" id="sim" name="presenca" value="sim"/> */}
                <label  className='resposta' for="sim"> sim</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="ás vezes"
                        name="presenca"
                        value="ás vezes"
                        checked={formData.presenca === 'ás vezes'}
                        onChange={handleChange}
                  />
                <label  className='resposta' for="ás vezes"> ás vezes</label>
              </div>
              <div className='item'>
                  <input
                        type="radio"
                        id="não"
                        name="presenca"
                        value="não"
                        checked={formData.presenca === 'não'}
                        onChange={handleChange}
                  />
                <label  className='resposta' for="não"> não</label>
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
                {/* <input type="radio" id="desconexo" name="avaliacao" value="desconexo"/> */}
                <label  className='resposta' for="desconexo">desconexo</label>
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
                <label  className='resposta' for="limitado">limitado</label>
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
                <label  className='resposta' for="justo">justo</label>
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
                <label  className='resposta' for="formativo">formativo</label>
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
                <label  className='resposta' for="abrangente">abrangente</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label>Em qual periodo  é recomendável pagar essa disciplina? </label><br></br>
            {/* <select
          name="periodo"
          value={formData.periodo}
          onChange={handleChange}
        > */}
            <Dropdown title="Período" items={items} />
        </div>
      </div>
    
      <div className='btn-form'>
        <button type='submit'><Link to={`../../AvaliacaoGeral/${Materiaid}`}>Continuar</Link></button>
      </div>
    </form>
  )
}

export default FormularioAvaliacao;