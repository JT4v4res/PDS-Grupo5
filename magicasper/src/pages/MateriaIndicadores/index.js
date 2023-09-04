import './index.css';
import SideBar from '../../Componentes/SideBar';
import AvaliacaoEstrela from '../../Componentes/Avaliacao-Estrela';
import SeletorCurso from "../../Componentes/Seletor-Curso";
import BarGraph from "../../Componentes/GraficoBarra";

function MateriaIndicadores (materia, codigo, dadosIndicadores, nivelEsforco, informativos){
  materia = "Estrutura de dados"
  codigo = "BP336CB"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  dadosIndicadores = ['Cerca de 80% dos alunos são aprovados na 1ª tentativa', '88%  não recomendam pegar  essa matéria se não viu o básico de programação', '50% afirmam que o seu professor foi didático', '44% dos usuários já concluíram essa matéria', '90% dos alunos recomendam essa matéria no inicio do curso', '97% afirmam que essa matéria requer muito tempo de dedicação']
  informativos = ['Mais de 70 alunos já avaliaram essa matéria', 'A última avaliação  foi feita em 10/10/2024']
  return (
  <>
  <div className='page-content'>
    
    <div className='title-content'>
      <SideBar/>
      <SeletorCurso texto={materia}/>
      <AvaliacaoEstrela/>
      <div className='esforco'>
        <label key={nivelEsforco}>Nível de esforço: {nivelEsforco[2]}</label>
      </div>
      
    </div>
    <div className='codigo'>
      <label>Código: {codigo}</label>
    </div>
    <div className='main-area'>
      <div className='jornada-aluno'>

        <div className='title'>
          <div className="linha-esq"></div>
          <div className="linha-acima"></div>
          <label>Jornada do <span> aluno </span> </label>
          <div className="linha-dir"></div>
          <div className="linha-abaixo"></div>
        </div>
        <div className='cards'>
            <ul className="dados-indicadores">
                  {
                      dadosIndicadores.map(dadosIndicadores => (
                          <li>
                              <a href='/'>{dadosIndicadores}</a>
                          </li>
                      ))
                  }
              </ul>
        </div>
      </div>

      <div className='informativos-escuro'>
        <ul className="dados-informativos">
                {
                    informativos.map(informativos => (
                        <li>
                            <a href='/'>{informativos}</a>
                        </li>
                    ))
                }
          </ul>
      </div>
      {/* Algum erro na lógica da coleta dos dados no arquivo data.js e no componente do graficoBarra */}
      <div className='graph-container'>
          <BarGraph/> 
      </div>
    </div>
  </div>
   
  </>
)

};

export default MateriaIndicadores;
