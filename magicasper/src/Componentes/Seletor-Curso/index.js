import './index.css';
import "@fontsource/reem-kufi";

export default function SeletorCurso (curso){
    curso = "Ciência da Computação"
    return (
        <>
            <div id='seletor-curso'>
                <ul className='label-principal'>
                <li className='icone-selecao'></li>
                <li key={curso}><label>{curso}</label></li>
                </ul>
            </div>
        </>
    )
};