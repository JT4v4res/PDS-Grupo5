import './index.css'
import userLogo from '../../img/img-commenter.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Cadastro(props){
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [curso, setCurso] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleCursoChange = (event) => {
    setCurso(event.target.value);
  };

  const handleSubmit = (event) => {
    navigate('/Cadastroo')
    event.preventDefault();
  };

  return(
    <>
      <div className='page-content'>
        <div className='magi-casper'>
          <h1>
            Magi Casper
          </h1>
        </div>

        <div className='main-container'>

        <div className='img-container'>
          <img src={userLogo}/>
        </div>

        <div className='cadastro-container'>
          <h2>Cadastro</h2>
          <div className='form-box'>
            <form onSubmit={handleSubmit}>

                <div id='usuario'>
                  <label htmlFor="username">Nome</label>
                  <input
                    type="text"
                    id="username"
                    value={name}
                    onChange={handleNameChange}
                    placeholder='Digite seu primeiro e segundo nome'
                    style={{ color: 'black' }}
                  />
                </div>
                <div id='usuario'>
                  <label htmlFor="username">E-mail</label>
                  <input
                    type="mail"
                    id="username"
                    value={mail}
                    onChange={handleMailChange}
                    placeholder='Digite seu e-mail'
                    style={{ color: 'black' }}
                  />
                </div>
                <div id='usuario'>
                  <label htmlFor="username">Curso</label>
                  <input
                    type="text"
                    id="username"
                    value={curso}
                    onChange={handleCursoChange}
                    placeholder='Digite seu curso'
                    style={{ color: 'black' }}
                  />
                </div>

              <div className='button-box'>
                <button type="submit" variant='primary'>{'>'}</button>
              </div>
            </form>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}