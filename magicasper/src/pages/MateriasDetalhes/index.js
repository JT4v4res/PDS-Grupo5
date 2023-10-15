import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import api from "../../Componentes/apis";
import {useParams} from "react-router-dom"
import {getMateriasDetalhes}  from '../../Componentes/CardMateria/data';
// Primeira tela dos detalhes da matéria aparecendo descrição damatéria e áreas de relevancia

let data;

api
    .get(`/MateriaDetalhes/:Materiaid/${1}`)
    .then((res) => {
        data = res.data;
        console.log(data);
    }).catch((e) => {
        console.log('erro: ', e);
});

export default function MateriaDetalhes (){

    const {Materiaid} = useParams();
    let post;
    console.log("esse:", getMateriasDetalhes)
    console.log("Id url:", Materiaid)
    getMateriasDetalhes.forEach(element => {
        if(element.Materiaid === Materiaid){
            console.log('Id da avaliação:', Materiaid)
            console.log("element: ",element)
            post = element;
        }
    });

    console.log("Post:", post)
    return (
        <>
        <Navbar/>
    
        <SideBar/>
   
        <div className="background">

        {/* <div className="backgroud-elipse"></div> */}
            <div className="info-page">
                <div className="materia-title-v1">
                    <label>{post.nome}</label>
                </div>
                <div className="materia-codigo">
                    <label>Código: {post.codigo}</label>
                </div>

                <div className="descricao">
                        <p>{post.descricao}</p>
                </div>

                <div className="areas-relevancia">
                    <label>Áreas de Relevância</label>
                    {/* <div className='title-barra-inferior'/> */}
                </div>

                <div className="cards">
                    <ul className="lista-de-relevancia">
                        {
                            post.areaRelevancia.map(areaRelevancia => (
                                <li>
                                    {areaRelevancia}
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