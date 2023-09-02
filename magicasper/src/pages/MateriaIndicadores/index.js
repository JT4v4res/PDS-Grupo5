import './index.css';
import SideBar from '../../Componentes/SideBar';

import SeletorCurso from "../../Componentes/Seletor-Curso";

function MateriaIndicadores (materia){
  materia = "Estrutura de dados"
return (
  <>
  <div className='page-content'>
    <SideBar/>
    <SeletorCurso texto={materia}/>
  </div>
   
    <h1>MateriaIndicadores</h1>
  </>
)

};

export default MateriaIndicadores;
