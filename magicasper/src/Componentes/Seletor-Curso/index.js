import './index.css';
import "@fontsource/reem-kufi";

export default function SeletorCurso (props){
    return (
        <>
            <div id='seletor-curso'>
                <ul className='label-principal'>
                <li className='icone-selecao'></li>
                <li key={props.texto}><label>{props.texto}</label></li>
                </ul>
            </div>
        </>
    )
};