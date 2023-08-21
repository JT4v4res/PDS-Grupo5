import Navbar from './Componentes/Navbar';
// import MateriasDetalhes from './Componentes/MateriasDetalhes';
import Disciplinas from './pages/Disciplinas';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import { Route, Routes } from "react-router-dom"
import './App.css';

function App (){
  return (
  <>
    <Navbar />
    <div className = "container">
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Disciplinas" element={<Disciplinas/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
