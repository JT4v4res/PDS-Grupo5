import "@fontsource/reem-kufi";
import './index.css';
import SideBar from '../../Componentes/SideBar';
import Navbar from '../../Componentes/Navbar';
import api from "../../Componentes/apis";
import {useParams} from "react-router-dom"
import {getMateriasDetalhes}  from '../../Componentes/CardMateria/data';
import {useEffect, useState} from "react";
// Primeira tela dos detalhes da matéria aparecendo descrição damatéria e áreas de relevancia

let data;

export default function MateriaDetalhes (){
    const {Materiaid} = useParams();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const dadosasync = async () => {
            const dados = await api
                .get(`/materia/${Materiaid}`)
                .then((res) => {
                    setData(res.data);
                    console.log('Resquest data: ', res.data);
                }).catch((e) => {
                    console.log('erro: ', e);
                });
            console.log('async')

            console.log('Dados requisição: ', dados);
            // setData(dados);
        }

        dadosasync();
    }, [Materiaid]);

    let post;
    console.log("esse:", getMateriasDetalhes)
    console.log("Id url:", Materiaid)

    console.log("Post:", post)

    if (data !== undefined && data !== null) {
       const areaString = [data.areaRelevante.split(', ')]
        console.log("area", data.areaRelevante)
        return (
            <>
                <Navbar/>

                <SideBar/>

                <div className="background">

                    {/* <div className="backgroud-elipse"></div> */}
                    <div className="info-page">
                        <div className="materia-title-v1">
                            <label>{data.nome}</label>
                        </div>
                        <div className="materia-codigo">
                            <label>Código: {data.codigo}</label>
                        </div>

                        <div className="descricao">
                            <p>{data.descricao}</p>
                        </div>

                        <div className="areas-relevancia">
                            <label>Áreas de Relevância</label>
                            {/* <div className='title-barra-inferior'/> */}
                        </div>

                        <div className="cards">
                            {areaString ? (
                                    <ul className="lista-de-relevancia">
                                        {areaString.map((areaRelevancia, index) => (
                                            <li style={{ marginBottom: 30 }} key={index}>
                                                {areaRelevancia}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Sem áreas relevantes</p>
                                )}
                        </div>

                    </div>

                </div>
            </>
        );
    } else {
        return ('Carregando...');
    }
};