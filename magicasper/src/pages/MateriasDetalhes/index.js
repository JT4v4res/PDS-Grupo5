import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';

export default function MateriaDetalhes (materia, nivelEsforco, codigo, areaRelevancia,descricao, professores, matExpositivo, literatura, questoes){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed aliquam sem sodales Nullam tempus pretium est, nec gravida felis tempus quis."
  professores = ['Marcio Ribeiro', 'Roberta Lopes']
  matExpositivo = ['Material 1', "Material 2"]
  literatura = ['Material 1', 'Material 2']
  questoes = ['Questão 1', 'Questão 2']
  areaRelevancia = ['Inteligencia Artificial', 'Análise de Algorítimos']

    return (
        <>
            <div className='page-content'>
                <SideBar/>
            </div>
{/* 
            <div className="materia-title">
                <label>{materia}</label>
            </div>
            <div className="materia">
                <label>Código: {codigo}</label>
            </div> */}
        </>
    );
};