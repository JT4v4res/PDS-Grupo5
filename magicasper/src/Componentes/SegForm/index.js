  import './index.css'
  import userLogo from '../../img/img-commenter.png';
  import { useNavigate } from 'react-router-dom';
  import React, { useState } from 'react';
  // import { useForm } from 'react-hook-form';
  import { useLocation } from 'react-router-dom';
  
  export default function SegundoCadastro(props){
      const [matricula, setMatricula] = useState('');
      const [password, setPassword] = useState('');
      const [isButtonEnabled, setIsButtonEnabled] = useState(false);

      const navigate = useNavigate();

      const location = useLocation();

      // Acesso às informações
      const { name, mail, curso } = location.state;
      // console.log("Nome1", name);
      // console.log("email1", mail);
      // console.log("curso1", curso);

      const handleMatriculaChange = (event) => {
          setMatricula(event.target.value);
      };

      const handlePasswordChange = (event) => {
          setPassword(event.target.value);
          validateForm()
      };

      const handleSubmit = (event) => {
          navigate('/Login')
          event.preventDefault();
      };

      const validateForm = () => {
        setIsButtonEnabled(password);
      };

      const inputErrorStyle = {
        color: 'red', // Define a cor do texto como vermelho
        border: '1px solid red', // Adicione uma borda vermelha
      };
    

    return(
      <>
        <div className='page-content-1'>
          <div className='magi-casper'>
            <h1>
              Magi Casper
            </h1>
          </div>

          <div className='main-container'>

          <div className='img-container'>
            <img alt='#' src={userLogo}/>
          </div>

          <div className='cadastro-container'>
            <h2>Cadastro</h2>
            <div className='form-box'>
              <form onSubmit={handleSubmit}>

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
                      style={password ? {color:'black'} : inputErrorStyle}
                  />
              </div>

              <div className='button-box'>
                  <button type="submit"
                  disabled={!isButtonEnabled}
                  >
                    {isButtonEnabled ? 'Cadastre-se' : 'Desabilitado'}
                </button>
              </div>
              </form>
            </div>

          </div>
          </div>
        </div>
      </>
    )
  }
