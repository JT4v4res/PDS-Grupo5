// import Navbar from './Componentes/Navbar';
import SideBar from './Componentes/SideBar';
import SubMenu from './Componentes/SideBar';
import Dropdown from './Componentes/Dropdown';
import FormularioAvaliacao from './Componentes/FormularioAvaliacao';
import Star from './Componentes/Star';
import ProgressBar from './Componentes/ProgressBar';
import Trofeus from './Componentes/trofeus';
import Materias from './pages/Materias';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import MateriaDetalhes from './pages/MateriasDetalhes';
import MateriaIndicadores from './pages/MateriaIndicadores';
import MaterialEstudo from './pages/materialEstudo';
import ProfessorDetalhes from './pages/professorDetalhes';
import AvaliacaoMateria from './pages/AvaliacaoMateria';
import AvaliacaoGeral from './pages/AvaliacaoGeral'
import Informativo from './pages/Informativo'
import MagicasperInicial from './pages/MagiCasperInicial'
import Login from './pages/Login'
import CadastroUser from './pages/Cadastro'


import { Route, Routes } from "react-router-dom"
import './App.css';

function App (){
  return (
  <>
    <div className = "container">
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Materias" element={<Materias/>}/>
        <Route path="/MateriaDetalhes" element={<MateriaDetalhes/>}/>
        <Route path="/AvaliacaoMateria" element={<AvaliacaoMateria/>}/>
        <Route path='/AvaliacaoGeral' element={<AvaliacaoGeral/>}/>
        <Route path="/professorDetalhes" element={<ProfessorDetalhes/>}/>
        <Route path="/materialEstudo" element={<MaterialEstudo/>}/>
        <Route path="/materiaIndicadores" element={<MateriaIndicadores/>}/>
        <Route path="/MagicasperInicial" element={<MagicasperInicial/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Cadastro' element={<CadastroUser/>}/>
        <Route path="/Sidebar" element={<SideBar/>}/>
        <Route path="/SubMenu" element={<SubMenu/>}/>
        <Route path="/FormularioAvaliacao" element={<FormularioAvaliacao/>}/>
        <Route path="/Informativo" element={<Informativo/>}/>
        <Route path="/Dropdown" element={<Dropdown/>}/>
        <Route path="/Star" element={<Star/>}/>
        <Route path="/ProgressBar" element={<ProgressBar/>}/>
        <Route path="/Trofeus" element={<Trofeus/>}/>
      </Routes>
    </div>
    
  </>
  );
}

export default App;
