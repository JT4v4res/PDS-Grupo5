import React, { useState } from "react";
import './index.css';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/esm/Form'
import Col from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
// import { InputGroup,  FormControl, Button, Form, Col } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getMaterias from "../../pages/Materias/MateriasService";

function BarraBusca(props) {
    const [search, setSearch] = useState('');

    function handleOnSubmit(event) {
        event.preventDefault();
        const materias = getMaterias();
        const results = materias.filter(materia => materia.nome.toLowerCase().indexOf(search) !== -1);
        props.setMaterias(results);
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
                        <Form.Control as="select" className="courseDropdown">
                            <option>Selecione um curso (opcional)</option>
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
            </Form>
        </div>
    );

}

export default BarraBusca;