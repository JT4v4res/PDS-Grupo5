import "@fontsource/reem-kufi";
import './index.css';
import SeletorCurso from "../../Componentes/Seletor-Curso";


export default function MateriaDetalhes (materia, nivelEsforco, codigo, descricao, professores, matExpositivo, literatura, questoes){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed aliquam sem sodales Nullam tempus pretium est, nec gravida felis tempus quis."
  professores = ['Marcio Ribeiro', 'Roberta Lopes']
  matExpositivo = ['Material 1', "Material 2"]
  literatura = ['Material 1', 'Material 2']
  questoes = ['Questão 1', 'Questão 2']

    return (
        <div id='page-content'>
            <SeletorCurso texto={materia}/>

            <div className='nivel-esforco'>
                <h3 key={nivelEsforco}><label>Nível de esforço: {nivelEsforco[0]}</label></h3>
            </div>

            <div id='cards'>
                <div className='card-lateral-esq'>
                    <div className='description-block'>
                        <ul>
                            <li>
                                Código: {codigo}
                            </li>

                            <li>
                                {descricao}
                            </li>
                        </ul>
                    </div>

                    <div className='horizontal-divider'/>

                    <div className='professors-block'>
                        <ul>
                            <h3>Professores</h3>

                            <ul>
                                {
                                    professores.map(prof => (
                                        <li>
                                            <a href='/'>{prof}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </div>


                </div>

                <div className='vertical-divider'/>
                    <div className='card-lateral-dir'>
                        <div id='comments-n-materials-block'>
                            <div className='comments-block'>
                                <div className='single-comment'>
                                    <div className='img-commenter'></div>
                                
                                    <p className='comment'>
                                        <i>Nome do comentarista: </i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam tempus pretium est, nec gravida felis tempus quis.
                                        Sed aliquam sem sodales tempor eleifend. Suspendisse tincidunt,
                                        lectus vel ultricies malesuada, sapien augue placerat ex, ut blandit
                                        est mi sit amet ligula. Etiam posuere arcu ac tortor pretium aliquet.
                                    </p>
                                    
                                </div>

                                <div className='horiz-divider-comment'/>

                                <div className='single-comment'>
                                    <div className='img-commenter'></div>
                                    <p className='comment'>
                                        <i>Nome do comentarista: </i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam tempus pretium est, nec gravida felis tempus quis.
                                        Sed aliquam sem sodales tempor eleifend. Suspendisse tincidunt,
                                        lectus vel ultricies malesuada, sapien augue placerat ex, ut blandit
                                        est mi sit amet ligula. Etiam posuere arcu ac tortor pretium aliquet.
                                    </p>
                                </div>

                            </div>

                        </div>
                        
                        <div id="card-material-estudo">

                            <div className="material-label"><label>Material de Estudo</label></div>

                            <div className="main-box">
                                    <ul className="lista-de-materiais">
                                        <div className="lista-label"><label>Material Expositivo</label></div>
                                        {
                                            matExpositivo.map(matExpositivo => (
                                                <li>
                                                    <a href='/'>{matExpositivo}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <ul className="lista-de-materiais">
                                        <div className="lista-label"><label>Material na Literatura</label></div>
                                        {
                                            literatura.map(literatura => (
                                                <li>
                                                    <a href='/'>{literatura}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="lista-de-materiais">
                                        <div className="lista-label"><label>Questões importantes</label></div>
                                        {
                                            questoes.map(questoes => (
                                                <li>
                                                    <a href='/'>{questoes}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};