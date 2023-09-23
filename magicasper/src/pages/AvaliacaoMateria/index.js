import './index.css';
import FormularioAvaliacao from '../../Componentes/FormularioAvaliacao';
import Navbar from '../../Componentes/Navbar';


function AvaliacaoMateria(disciplina){

  disciplina =[
    {
      nome: 'Programação 1',
      codigo: 'Comp445',
      professor: 'Ferreira',
      semestre: '2024.1'
    }
  ]
  
  return(
    <>
    <Navbar/>
      <div className='materia-title'>
        <div className='conteiner-top'>
          <div className='linha-lilas'/>
              {
                disciplina.map(disciplina => (
                          <h2>{disciplina.nome}</h2>
              ))
              }
          <div className='linha-rosa'/>
        </div>
      </div>
      <div className='main-content'>
        <div className='left-info'>
          <div className='disciplina-info'>
                <ul className='detail-disciplinas'>
                          {
                              disciplina.map(disciplina => (
                                  <li>
                                      <label>Código: {disciplina.codigo}</label>
                                      <label>Professor: {disciplina.professor}</label>
                                      <label>Semestre: {disciplina.semestre}</label>
                                  </li>
                              ))
                          }
                </ul>
          </div>
          <div className='card-claro-form'>
            <p>A cada matéria você ganhará + 50 pontos</p>
          </div>
        </div>
        <div className='form-side'>
              <div className='formulario'>
                <FormularioAvaliacao/>
              </div>
        </div>
      </div>
    </>
  )
}

export default AvaliacaoMateria;

