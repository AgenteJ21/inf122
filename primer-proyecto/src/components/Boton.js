import React from 'react';
import '../styles/Boton.css';

export default function Boton({texto, esBotonClick, funcionClick}){
    return (
        <button className={esBotonClick ? "boton-click" : "boton-reiniciar"}
            onClick={funcionClick}>
            {texto}
        </button>
    )
};
