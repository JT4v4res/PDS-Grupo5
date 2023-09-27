import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import api from "../../Componentes/apis";

let data;

api
    .get(`/materia/${1}`)
    .then((res) => {
        data = res.data;
        console.log(data);
    }).catch((e) => {
        console.log('erro: ', e);
});

export default function MateriaDetalhes (materia, nivelEsforco, codigo, areaRelevancia,descricao, professores, matExpositivo, literatura, questoes){
  materia = data.nome
  nivelEsforco = data.nivelEsforco
  codigo = data.codigo
  descricao = data.descricao
  professores = data.professores
  matExpositivo = ['Material 1', "Material 2"]
  literatura = ['Material 1', 'Material 2']
  questoes = ['Questão 1', 'Questão 2']
  areaRelevancia = ['Programação Distribuida','Inteligencia Artificial', 'Análise de Algorítimos']

    return (
        <>
        <Navbar/>
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