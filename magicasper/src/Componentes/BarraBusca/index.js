import React, { useState, useEffect } from "react";
import './index.css';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/esm/Form'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import getMaterias from "../../pages/Materias/MateriasService";

function BarraBusca(props) {
    const [search, setSearch] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [resultCount, setResultCount] = useState(props.length); // Estado para armazenar o número de resultados
    const [results, setResults] = useState([]); // Estado para armazenar os resultados

    useEffect(() => {
        // Atualize o contador de resultados sempre que a pesquisa for bem-sucedida
        setResultCount(results.length);
    }, [results]);

    function handleOnSubmit(event) {
        event.preventDefault();
        const materias = props.setMaterias;
        console.log("Materias props: ", props)
        
        console.log("Materias repassadas: ", materias)
        let filteredResults = materias;

        if (selectedCourse && selectedCourse !== 'Filtrar por curso...'){
            filteredResults = materias.filter(materia => materia.curso.includes(selectedCourse));
        }

        if (search){
            filteredResults = filteredResults.filter(materia => materia.nome.toLowerCase().indexOf(search) !== -1);

        }
        console.log("Materias encontrada: ",filteredResults )
        setSelectedCourse(filteredResults)
        setResults(filteredResults);
    }

    function handleCourseChange(event) {
        setSelectedCourse(event.target.value);
    }

    function handleSearchChange(event) {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <div className="search-bar-container">
            <Form onSubmit={handleOnSubmit} className="form">
                <div className="form-content">
                    <Form.Control
                        className="input-box"
                        placeholder="Pesquisar matéria específica"
                        aria-label="Pesquisar matéria específica"
                        onChange={handleSearchChange}
                    />
                    <Form.Group controlId="courseDropdown">
                        <Form.Control as="select" className="courseDropdown" onChange={handleCourseChange}>
                            <option>Filtrar por curso...</option>
                            <option>Ciência da Computação</option>
                            <option>Engenharia de Computação</option>
                        </Form.Control>
                    </Form.Group>
                    <InputGroup className="search-button">
                        <Button type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </InputGroup>
                </div>
                <div className="result-count">
                    {resultCount !== 0 ? `Resultados encontrados: ${resultCount}` : ""}
                </div>
            </Form>
        </div>
    );

}

export default BarraBusca;