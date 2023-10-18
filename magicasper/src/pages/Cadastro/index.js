import './index.css';
import userLogo from '../../img/img-commenter.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Cadastro(props) {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [curso, setCurso] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
    validateForm();
  };

  const handleCursoChange = (event) => {
    setCurso(event.target.value);
  };

  const validateForm = () => {
    console.log("Nome1", name);
    console.log("email1", mail);
    console.log("curso1", curso);
    setIsButtonEnabled(name && mail);
  };

  const handleNavigation = () => {
    const data = {
      name,
      mail,
      curso,
    };
    validateForm();

    navigate('/Cadastroo', { state: data }); // Redirecionamento para a segunda página
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nome1", name);
    console.log("email1", mail);
    console.log("curso1", curso);
    handleNavigation();
  };

  const inputErrorStyle = {
    color: 'red', // Define a cor do texto como vermelho
    border: '1px solid red', // Adicione uma borda vermelha
  };

  return (
    <>
      <div className="page-content-2">
        <div className="magi-casper">
          <h1>Magi Casper</h1>
        </div>

        <div className="main-container">
          <div className="img-container">
            <img alt="#" src={userLogo} />
          </div>

          <div className="cadastro-container">
            <h2>Cadastro</h2>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <div id="usuario">
                  <label htmlFor="username">Nome</label>
                  <input
                    type="text"
                    id="username"
                    value={name}
                    onChange={handleNameChange}
                    placeholder={'Digite seu primeiro e segundo nome'}
                    style={name ? {color:'black'} : inputErrorStyle}
                  />
                </div>
                <div id="usuario">
                  <label htmlFor="username">E-mail</label>
                  <input
                    type="email"
                    id="username"
                    value={mail}
                    onChange={handleMailChange}
                    placeholder={ 'Digite seu e-mail'}
                    style={mail ? {color:'black'} : inputErrorStyle}
                  />
                </div>
                <div id="usuario">
                  <label htmlFor="usuario">Curso</label>
                  <select
                    id="dropdown"
                    value={curso}
                    onChange={handleCursoChange}
                    style={curso ? {color:'black'} : inputErrorStyle}
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="Ciência da Computação">Ciência da Computação</option>
                    <option value="Engenharia de Computação">Engenharia de Computação</option>
                  </select>
                </div>

                <div className="button-box">
                <button
                  type="submit"
                  variant="primary"
                  onClick={handleNavigation}
                  disabled={!isButtonEnabled}
                >
                  {isButtonEnabled ? '>' : 'Desabilitado'}
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
