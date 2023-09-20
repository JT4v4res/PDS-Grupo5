import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';

export default function MateriaDetalhes (materia, nivelEsforco, codigo, areaRelevancia,descricao, professores, matExpositivo, literatura, questoes){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus pretium est, nec gravida felis tempus quis. Sed aliquam sem sodales tempor eleifend. Suspendisse tincidunt, lectus vel ultricies malesuada, sapien augue placerat ex, ut blandit est mi sit amet ligula. Etiam posuere arcu ac tortor pretium aliquet."
  professores = ['Marcio Ribeiro', 'Roberta Lopes']
  matExpositivo = ['Material 1', "Material 2"]
  literatura = ['Material 1', 'Material 2']
  questoes = ['Questão 1', 'Questão 2']
  areaRelevancia = ['Programação Distribuida','Inteligencia Artificial', 'Análise de Algorítimos']

    return (
        <>
        <div className='page-content'>
            <SideBar/>
        </div>
        <div className="background">

        {/* <div className="backgroud-elipse"></div> */}
            <div className="info-page">
                <div className="materia-title-v1">
                    <label>{materia}</label>
                </div>
                <div className="materia-codigo">
                    <label>Código: {codigo}</label>
                </div>

                <div className="descricao">
                    <div>
                        <p>{descricao}</p>
                    </div>
                </div>

                <div className="areas-relevancia">
                    <label>Áreas de Relevância</label>
                    {/* <div className='title-barra-inferior'/> */}
                </div>

                <div className="cards">
                    <ul className="lista-de-relevancia">
                        {
                            areaRelevancia.map(areaRelevancia => (
                                <li>
                                    <a href='/'>{areaRelevancia}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

        </div>
        </>
    );
};