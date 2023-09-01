import Navbar from './Componentes/Navbar';
import Materias from './pages/Materias';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import MateriaDetalhes from './pages/MateriasDetalhes';
import ComentariosTotal from './pages/comentariosTotal';
import ProfessorDetalhes from './pages/professorDetalhes';
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
        <Route path="/Materias" element={<Materias/>}/>
        <Route path="/MateriaDetalhes" element={<MateriaDetalhes/>}/>
        <Route path="/professorDetalhes" element={<ProfessorDetalhes/>}/>
        <Route path="/ComentariosTotal" element={<ComentariosTotal/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
