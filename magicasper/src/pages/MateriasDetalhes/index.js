import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import api from "../../Componentes/apis";
import Exemplos from "../Materias/MateriasService";

let data = Exemplos;

// api
//     .get(`/materia/${1}`)
//     .then((res) => {
//         data = res.data;
//         console.log(data);
//     }).catch((e) => {
//         console.log('erro: ', e);
// });

export default function MateriaDetalhes (){
  let materia = data.nome
  let nivelEsforco = data.nivelEsforco
  let codigo = data.codigo
  let descricao = data.descricao
  let professores = data.professores
  let matExpositivo = data.matExpositivo
  let literatura = data.literatura
  let questoes = data.questoes
  let areaRelevancia = data.areaRelevancia

    return (
        <>
        <Navbar/>
        <div className='page-content'>
            <SideBar/>

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