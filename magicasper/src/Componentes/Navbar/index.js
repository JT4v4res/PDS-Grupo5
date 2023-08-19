import './index.css';

function Navbar  () {
 return <header>
        <nav id="navbar">
          <div className="container">
            <h1 className="logo">
              <a href="index.html">Magi Casper</a>
            </h1>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/Perfil">Perfil</a></li>
              <li><a href="/Disciplinas">Materias</a></li>
              <li><img src="./img/config-icon.png" alt="Config Icon" /></li>
            </ul>
          </div>
        </nav>
      </header>
}

export default Navbar;
