import React from 'react';
import '../styles/Cuadro.css';
export default function Cuadro({valor, funcion}) {
    return (
        <button className='cuadro' onClick={funcion}>
            {valor}
        </button>
    );
}