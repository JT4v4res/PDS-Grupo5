import './index.css'
import userLogo from '../../img/img-commenter.png';
import React, { useState } from 'react';

export default function Cadastro(){
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [curso, setCurso] = useState('');
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  const [showSecondPart, setShowSecondPart] = useState(false);
  
  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleSecondPart = () => {
    setShowSecondPart(!showSecondPart);
  };

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

              <div className={`form-part ${showSecondPart ? '' : 'show'}`}>
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
              </div>

              <div className={`form-part ${showSecondPart ? '' : 'hide' }`}>
                <div id='usuario'>
                  <label htmlFor="username">Matrícula</label>
                  <input
                    type="text"
                    id="username"
                    value={matricula}
                    onChange={handleMatriculaChange}
                    placeholder='Digite sua matrícula'
                    style={{ color: 'black' }}
                  />
                </div>
                <div id='senha'>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='Digite sua senha'
                    style={{ color: 'black' }}
                  />
                </div>
              </div>

              <div className="toggle-button" onClick={toggleSecondPart}>
                {showSecondPart ? '<O' : 'O>'}
              </div>
              {/* <FaEye class="password-toggle"/> */}
              {/* <div className='button-box'>
                <button type="submit">Entrar</button>
              </div> */}
            </form>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}