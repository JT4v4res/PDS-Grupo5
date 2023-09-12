import './index.css';
import SideBar from '../../Componentes/SideBar';
import SeletorCurso from "../../Componentes/Seletor-Curso";
import BarGraph from "../../Componentes/GraficoBarra";


function ProfessorDetalhes (professor, materia, lattes, codigo, desc_materia, tempoMinistrando, desc_professor, dadosIndicadoresProfessor){
  professor = 'John Doe'
  materia = 'Estrutura de dados'
  codigo = 'DPEIM30'
  lattes = 'http://lattes.cnpq.br/9300936571715992'
  desc_materia = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend.'
  desc_professor = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend.'
  tempoMinistrando = 4
  dadosIndicadoresProfessor = ['52%  consideram o método de avaliação como "formativo"', '61%  afirmam que a didática é “adaptável”', '74%  reportaram  cobrança de presença' ]
  return (
    <>
    <div className='page-content'>
      <div className='title-content'>
        <SideBar/>
       <label className='professor-name' key={professor}>{professor}</label>
      </div>
      <div className='lattes'>
        <a href={lattes} target='_blank' rel="noreferrer noopener nofollow">[Lattes]</a>
      </div>
      <div className='main-content'>
        <div className='left-content'>
          <div className='materia-info'>
              <div className='nome-materia'>
                <SeletorCurso texto={materia}/>
              </div>
              <div className='codigo-1'>
                <label key={codigo}>Código: {codigo}</label>
              </div>
              <p>{desc_materia}</p>
          </div>
        <div className='horiz-line'></div>
          <div className='professor-info'>
              <div className='tempo-ministrado'>
                  <label>{tempoMinistrando} semestres ministrando a disciplina</label>
              </div>
              <p key={desc_professor}>{desc_professor}</p>
          </div>
        </div>

        <div className='vertical-line'></div>
        
        <div className='rigth-content'>
          <div className='graph-container'>
            {/* <BarGraph/>  */}
          </div>
          <div className='informacoes-relevantes'>
            <label>Informações relevantes</label>
            <div className='cards-2'>
              <ul className="dados-indicadores">
                    {
                        dadosIndicadoresProfessor.map(dadosIndicadoresProfessor => (
                            <li>
                                <a href='/'>{dadosIndicadoresProfessor}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default ProfessorDetalhes;
