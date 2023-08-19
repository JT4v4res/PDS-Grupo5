import './index.css';
import { Link } from "react-router-dom"

function Navbar  () {
return <header>
        <nav id="navbar">
          <div className="container">
            <h1 className="logo">
              <Link to="index.html">Magi Casper</Link>
            </h1>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Perfil">Perfil</Link></li>
              <li><Link to="/Disciplinas">Materias</Link></li>
              <li><img src="./img/config-icon.png" alt="Config Icon" /></li>
            </ul>
          </div>
        </nav>
      </header>
}

export default Navbar;

