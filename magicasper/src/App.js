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
import PrimeiraParteCadastro from './pages/Cadastro'
import SegundaParteCadastro from './Componentes/SegForm'


import { Route, Routes } from "react-router-dom"
import './App.css';

function App (){
  return (
    <>
    <div className = "container">
      <Routes>
        <Route path="/" element={<MagicasperInicial/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Perfil/*" element={<Perfil/>}/>
        <Route path="/AvaliacaoMateria/:Materiaid/*" element={<AvaliacaoMateria/>}/>
        <Route path="/Materias/*" element={<Materias/>}/>
        <Route path="/MateriaDetalhes/:Materiaid/*" element={<MateriaDetalhes/>}/>
        <Route path='/AvaliacaoGeral/:Materiaid/*' element={<AvaliacaoGeral/>}/>
        <Route path="/professorDetalhes/:Materiaid/*" element={<ProfessorDetalhes/>}/>
        <Route path="/materialEstudo/:Materiaid/*" element={<MaterialEstudo/>}/>
        <Route path="/materiaIndicadores/:Materiaid/*" element={<MateriaIndicadores/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Cadastro' element={<PrimeiraParteCadastro/>}/>
        <Route path='/Cadastroo' element={<SegundaParteCadastro/>}/>
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
