import './index.css'
import userLogo from '../../img/img-commenter.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

export default function SegundoCadastro(props){
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const register = useForm();

    const handleMatriculaChange = (event) => {
        setMatricula(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        navigate('/Perfil')
        event.preventDefault();
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
          <img src={userLogo}/>
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
                    style={{ color: 'black' }}
                    // ref={register({
                    //   required: 'Password is required.',
                    //   minLength: {
                    //     value: 6,
                    //     message: 'Password should have at-least 6 characters.'
                    //   }
                    // })}                               TODO
                />
            </div>

            <div className='button-box'>
                <button type="submit">Inscrever-se</button>
            </div>
            </form>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}
