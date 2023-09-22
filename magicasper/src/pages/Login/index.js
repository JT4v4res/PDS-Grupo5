import './index.css'
import userLogo from '../../img/img-commenter.png';
import React, { useState } from 'react';

export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome de usuário:', username);
    console.log('Senha:', password);
  };

  return(
    <>
      <div className='page-content'>
        <div className='magi-casper'>
          <h1>
            Magi Casper
          </h1>
        </div>

        <div className='img-container'>
          <img src={userLogo}/>
        </div>

        <div className='login-container'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div id='usuario'>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder='Digite seu CPF ou e-mail'
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
              />
            </div>
            <div className='text'>
              <span>Para alterar a senha clique aqui</span>
              <span>Cadastre-se</span>
            </div>
            <div className='button-box'>
              <button type="submit">Entrar</button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}