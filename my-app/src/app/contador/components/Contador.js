import React from "react";
import style from './Contador.modules.css';

export default function Contador({nroClicks, mostrar}){
    return (
        mostrar ? <div className={style.contador}>{nroClicks}</div> :  null
    )
};