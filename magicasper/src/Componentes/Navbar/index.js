import './index.css';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import React, { useContext } from 'react';
import * as FiIcons from 'react-icons/fi';
import { AuthContext } from '../../context/context';

function Navbar() {
  const { logOut, signed } = useContext(AuthContext); // Importe 'signed' do contexto
  const navigate = useNavigate(); // Use useNavigate para navegar entre as rotas

  const handleLogout = () => {
    logOut(); // Chame a função logOut do contexto
    navigate('/login'); // Redirecione o usuário para a página de login
  };

  return (
    <header>
      <nav id="navbar">
        <div className="container">
          <h1 className="logo">
            <Link to={signed ? '/Home' : '/'}>Magi Casper</Link>
          </h1>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Perfil">Perfil</Link></li>
            <li><Link to="/Materias">Materias</Link></li>
           
            <li className='navbar-link'>
              <div className='logout'>
                <FiIcons.FiLogOut onClick={handleLogout} />
              </div>
            </li>
      
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
