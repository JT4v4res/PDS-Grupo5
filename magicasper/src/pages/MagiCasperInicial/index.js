import './index.css'
import { Link } from "react-router-dom"

function MagiCasperInicial(){
  return(
    <>
         <div className='geral'>
        <div className='esq-box'>
          <div className='titles'>
            <h2>Bem-vindos ao</h2>
            <header>Magi Casper</header>
          </div>
          <div className='linha-rosa'></div>
          <div className='text-info'>
              Seu sistema de planejamento acadêmico.
          </div>
        </div>
        <div className='dir-box'>
          <div className='card-azul'>
            <p>O seu sucesso acadêmico merece a melhor orientação - encontre-a aqui!</p>
          </div>
          <div className='box-enter'>
             <header>Comece agora</header>
            <div className='button'>
              <Link to={'../Login'}>Entrar</Link>
            </div>
            <div className='button'>
              <Link to={'../Cadastro'}>Cadastre-se</Link>
            </div>
          </div>
          <div className='card-azul-2'>
            <p>Mantenha-se antenado através de insights de matérias e dicas dos colegas.</p>
          </div>
          <div className='footer-info'> 
            <Link to={"#"}>Termos de Uso</Link>
            <div className='Linha-vertical'></div>
            <Link to={'#'}>Política de privacidade</Link>
          </div>
        </div>  
       </div>
    </>
  )
}

export default MagiCasperInicial;