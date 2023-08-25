import "@fontsource/reem-kufi";
import './index.css';
import SeletorCurso from "../../Componentes/Seletor-Curso";


export default function MateriaDetalhes (materia, nivelEsforco, codigo, descricao, professores){
  materia = "Estrutura de dados"
  nivelEsforco = ['Baixo', 'Médio', 'Alto']
  codigo = "BP336CB"
  descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed aliquam sem sodales Nullam tempus pretium est, nec gravida felis tempus quis."
  professores = ['Marcio Ribeiro', 'Roberta Lopes']
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
                                            {prof}
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </div>


                </div>

                <div className='vertical-divider'/>

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
            </div>
        </div>
    )
};