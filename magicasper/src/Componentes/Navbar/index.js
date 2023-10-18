import './index.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import "@fontsource/reem-kufi";


function Navbar  () {
  const UserLogged = true;
return <header>
        <nav id="navbar">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  UserLogged ? (
                    <h1 className="logo">
                      <Link to="/Home">Magi Casper</Link>
                    </h1>
                  ) : (
                    <h1 className="logo">
                      <Link to="/">Magi Casper</Link>
                    </h1>
                  )
                }
              />
            </Routes>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Perfil">Perfil</Link></li>
              <li><Link to="/Materias">Materias</Link></li>
            </ul>
          </div>
        </nav>
      </header>
}

export default Navbar;

