import './index.css';
import SeletorCurso from '../../Componentes/Seletor-Curso';
import SideBar from '../../Componentes/SideBar';
import PontosBckgrd from '../../Componentes/PontosBckgrd';

function MaterialEstudo (materia, codigo, textoBase, textoBase2, textoBase3){
  materia = "Estrutura de Dados"
  textoBase = "Canal no Youtube: Playlist da UNICAMP\n" +
  "Canal do Youtube: BroCode Playlist de C++\n" +
  "Apostila Introdutória da UFPE\n" +
  "Postagem sobre Listas Encadeadas, Medium"
  textoBase2 = "Questões Fáceis no Huxley\n" +
  "Questões Médias no Leet Code\n" +
  "Questões Difíceis no Hackerrank\n" +
  "Apostila de questões da UFPB"
  textoBase3 = "Introduction to Algorithms, de Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein\n" +
  "Algorithms Unlocked, de Thomas H. Cormen\n" +
  "The Algorithm Design Manual, de Steven S. Skiena\n" +
  "Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles, de Narasimha Karumanchi"
  codigo = "COMP415"
  return (
    <>
      <div className='page-content'>
        <div className='title-content'>
          <SideBar/>
          <SeletorCurso texto={materia}/>
        </div>

        <div className='codigo'>
          <label>Código: {codigo}</label>
        </div>

        <div className='superior-block'>
          <div className='card-material-expositivo'>
            <div className='title-mat-expo'>
              <label>Materiais expositivos</label>
              <div className='title-barra-inferior'/>
            </div>
            <div className='material-expositivo'>
              <p>{textoBase.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}</p>
            </div>
          </div>

          <div className='card-questoes'>
            <div className='title-quest'>
              <label>Questões</label>
              <div className='title-barra-inferior-2'/>
            </div>
            <div className='questoes'>
              <p>{textoBase2.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
              ))}</p>
            </div>
          </div>
        </div>

        <div className='inferior-block'>
          <div className='card-literat'>
            <div className='title-literat'>
              <label>Materiais na literatura</label>
              <div className='title-barra-inferior-3'/>
            </div>
            <div className='materiais-literat'>
              <p>{textoBase3.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
              ))}</p>
            {/* <PontosBckgrd/> */}
            </div>
          </div>
        </div>
        

      </div>
    </>
  )

};

export default MaterialEstudo;
