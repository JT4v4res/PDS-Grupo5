import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import Navbar from '../../Componentes/Navbar';
import "@fontsource/reem-kufi";
import React, { useEffect, useState } from 'react';
import api from "../../Componentes/apis";
import CardMateria from '../../Componentes/CardMateria';
import BarraBusca from '../../Componentes/BarraBusca';

let data;

api
    .get(`/materia`)
    .then((res) => {
      data = res.data;
    });
    
    console.log('API.data: ',data);

function Materias (){
  const [materias, setMaterias] = useState([]);
  const [filteredMaterias, setFilteredMaterias] = useState([]);

  const handleResultChange = (filteredResults) => {
    setFilteredMaterias(filteredResults);
  }
    // console.log('API.data: ',data);
    console.log(materias);

  if(data !== undefined || data !== null){
    return (
    <>
      <Navbar/>
      <SeletorCurso texto={'Catálogo de matérias'}/>
      <BarraBusca setMaterias={res.data} onResultChange={handleResultChange}/>
      
      <div id='container-cards'>
        {filteredMaterias && filteredMaterias.length > 0 ? filteredMaterias.map(materia => (
          <CardMateria
            MateriaId={materia.materiaId}
            materia={materia.nome}
            codigo={materia.codigo}
            periodo={materia.periodo}
            descricao={materia.descricao}
            nivelEsforco={materia.nivelEsforco}
            professor={materia.professores}
            curso={materia.curso}
          />
        )) : (
          data.map(materia => {
            return (
              <CardMateria
                MateriaId={materia.materiaId}
                materia={materia.nome}
                codigo={materia.codigo}
                periodo={materia.periodo}
                descricao={materia.descricao}
                nivelEsforco={materia.nivelEsforco}
                professor={materia.professores}
                curso={materia.curso}
              />
            );
          })
        )}

      </div>
    </>
    )
  }
  else{
    return(
        <>
          <Navbar/>
          <SeletorCurso texto={'Catálogo de matérias'}/>
          <BarraBusca setMaterias={setMaterias}/>

          <div id='container-cards'>
            <p>Nenhuma Materia Cadastrada</p>
          </div>
        </>
    )
  }
};

export default Materias
