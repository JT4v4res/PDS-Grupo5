import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';

export default function MateriaDetalhes (materia, nivelEsforco, codigo, areaRelevancia,descricao, professores, matExpositivo, literatura, questoes){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "COMP415"
  descricao = "As estruturas de dados definem a organização, métodos de acesso e opções de processamento para a informação manipulada pelo programa. A definição da organização interna de uma estrutura de dados é tarefa do projetista da estrutura, que define também qual a API2 para a estrutura, ou seja, qual o conjunto de procedimentos que podem ser usados para manipular os dados na estrutura."
  professores = ['Marcio Ribeiro', 'Roberta Lopes']
  areaRelevancia = ['Programação Competitiva','Engenharia de Software', 'Análise de Algorítimos']

    return (
        <>
        <div className='page-content'>
            <SideBar/>
        </div>
        <div className="background">

        {/* <div className="backgroud-elipse"></div> */}
            <div className="info-page">
                <div className="materia-title">
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