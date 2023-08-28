import './index.css'
// COMPONENTE RESPOSÁVEL PELO CALCULO DA AVALIAÇÃO DAS DISCIPLINAS/PROFESOR

function AvaliacaoEstrela(avaliacao){
  let tam_avaliacao;
  for (let index = 0; index < avaliacao; index++) {
    tam_avaliacao.apend('1');
  }
  console.log(tam_avaliacao)
  return(
    <>
    <div id='avaliacao'>
      <ul>
      {
          tam_avaliacao.map(tam_avaliacao => (
              <li className='icone-avaliacao'> </li>
          ))
      }
      </ul>
    </div>
    </>
  )
}

export default AvaliacaoEstrela;