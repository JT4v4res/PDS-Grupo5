import './index.css';
import "@fontsource/reem-kufi";

export default function SeletorUser (props){
    return (
        <>
            <div id='seletor-user'>
                <ul className='label-principal'>
                <li key={props.texto}><label>{props.texto}</label></li>
                </ul>
            </div>
        </>
    )
};