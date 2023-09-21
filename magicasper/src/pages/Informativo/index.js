import './index.css'
import { Link } from "react-router-dom"
import Navbar from '../../Componentes/Navbar';

function Informativo(){
  return(
    <>
    <Navbar/>
    <div className='card-claro-v1'>
      <p>Agradecemos a contribuição você acaba de ganhar ....</p>
    </div>

    <div className='card-medio'>
        <p>
          <span>+50</span> pontos
          <div className='linha-rosa'/>
        </p>
    </div>
    <div className='btn-return'>
          <Link to={'../Perfil'}>Voltar</Link>
        </div>
    </>

    )
};

export default Informativo;