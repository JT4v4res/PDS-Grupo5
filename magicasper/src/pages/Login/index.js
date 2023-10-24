import './index.css'
import userLogo from '../../img/img-commenter.png';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signed, signIn, storedToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // Variável de estado para mensagem de erro

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      await signIn(username, password);

      console.log(signed)
      if (signed !== null && signed !== undefined && signed === true ) {
        navigate('/Perfil');
      } else {
        setErrorMessage('Usuário ou senha incorretos. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
      setErrorMessage('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };
  

  return (
    <>
      <div className="page-content-3">
        <div className="magi-casper">
          <h1>Magi Casper</h1>
        </div>

        <div className="main-container">
          <div className="img-container">
            <img alt="#" src={userLogo} />
          </div>

          <div className="login-container">
            <h2>Login</h2>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <div id="usuario">
                  <label htmlFor="username">Usuário</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Digite sua matrícula ou e-mail"
                    style={{ color: 'black' }}
                  />
                </div>
                <div id="senha">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Digite sua senha"
                    style={{ color: 'black' }}
                  />
                </div>
                {errorMessage && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: 'red', margin: '0' }}>{errorMessage}</p>
                    </div>
                )}
                <div className="button-box">
                  <button type="submit">Entrar</button>
                </div>
              </form>
            </div>

            <div className="help-text">
              <Link to="#">
                <span>Esqueci a senha</span>
              </Link>
              <Link to="/Cadastro">
                <span>Cadastre-se</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
