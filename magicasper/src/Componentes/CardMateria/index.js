import React from 'react';
import { Link,useParams } from "react-router-dom"
import './index.css';

export default function CardMateria (props){
    const { Materiaid } = useParams();
    console.log("ID da materia:", props.MateriaId)
    return (
        <div id='card-unitario'>
            <div id='conteudo-card-unitario'>
                <label className='title' key={props.materia}>{props.materia}</label>
                <ul>
                <li key={props.codigo}><label className='code'>Código: {props.codigo}</label></li>
                <li key={props.periodo}><label className='code'>Período: {props.periodo}</label></li>
                </ul>
                <label className='button'>
                {/* <Link to='/MateriaDetalhes/'>Saber mais</Link> */}
                <Link to={`/MateriaDetalhes/${props.MateriaId}`}>Saber Mais</Link>
                </label>
            </div>
        </div>
    );
}