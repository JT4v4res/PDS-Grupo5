import Navbar from './Componentes/Navbar';
import Disciplinas from './pages/Disciplinas';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import MateriaDetalhes from './pages/MateriasDetalhes';
import { Route, Routes } from "react-router-dom"
import './App.css';

function App (){
  return (
   // let Component; 
  // switch (window.location.pathname) {
  //   case '/Home':
  //     Component = <Home/>
  //     break
  //   case '/Perfil':
  //     Component = <Perfil/>
  //     break
  //   case '/Disciplinas':
  //     Component = <Disciplinas/>
  //     break
  //   default:
  //     window.location.pathname = '/'
  // }
  <>
    <Navbar />
    <div className = "container">
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Disciplinas" element={<Disciplinas/>}/>
        <Route path="/MateriaDetalhes" element={<MateriaDetalhes/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
