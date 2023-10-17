import SeletorCurso from '../../Componentes/Seletor-Curso';
import './index.css';
import Navbar from '../../Componentes/Navbar';
import "@fontsource/reem-kufi";
import React, { useEffect, useState } from 'react';
import api from "../../Componentes/apis";
import getMaterias  from './MateriasService';
import CardMateria from '../../Componentes/CardMateria';
import BarraBusca from '../../Componentes/BarraBusca';

let data;

api
    .get(`/materia`)
    .then((res) => {
      data = res.data;
      console.log('Res.data: ',res.data);
    });


function Materias (){
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    setMaterias(getMaterias());
  }, [])
return (
<>
  <Navbar/>
  <SeletorCurso texto={'Catálogo de matérias'}/>
  <BarraBusca setMaterias={setMaterias}/>

  <div id='container-cards'>
    {data.map(materia => {
      return (
        <CardMateria
          MateriaId={materia.materiaId}
          materia={materia.nome}
          codigo={materia.codigo}
          periodo={materia.periodo}
          descricao = {materia.descricao}
          nivelEsforco = {materia.nivelEsforco}
          professor ={materia.professores}
          curso = {materia.curso}
          // matExpositivo = {materia.matExpositivo}
          // literatura = {materia.literatura}
          // questoes ={materia.questoes}
          // areaRelevancia={materia.areaRelevancia}
        />
      )
    })}
  </div>
</>
)
};

export default Materias
