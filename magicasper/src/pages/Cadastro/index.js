// import './index.css'
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

  // const passwordInput = document.getElementById('password');
  // const passwordToggle = document.querySelector('.password-toggle');

  // passwordToggle.addEventListener('click', function () {
  //   if (passwordInput.type === 'password') {
  //     passwordInput.type = 'text';
  //     passwordToggle.classList.remove('fa-eye');
  //     passwordToggle.classList.add('fa-eye-slash');
  //   } else {
  //     passwordInput.type = 'password';
  //     passwordToggle.classList.remove('fa-eye-slash');
  //     passwordToggle.classList.add('fa-eye');
  //   }
  // });

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

        <div className='login-container'>
          <h2>Cadastro</h2>
          <div className='form-box'>
            <form onSubmit={handleSubmit}>
              <div id='usuario'>
                <label htmlFor="username">Nome</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='Digite seu CPF ou e-mail'
                  style={{ color: 'black' }}
                />
              </div>
              <div id='usuario'>
                <label htmlFor="username">E-mail</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='Digite seu CPF ou e-mail'
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
              {/* <FaEye class="password-toggle"/> */}
              </div>
              <div className='button-box'>
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>

          <div className='help-text'>
              <a href=''><span>Esqueci a senha</span></a>
              <a href='/Cadastro'><span>Cadastre-se</span></a>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}