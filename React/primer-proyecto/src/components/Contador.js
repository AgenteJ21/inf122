import React from "react";
import '../styles/Contador.css';

export default function Contador({nroClicks, mostrar}){
    return (
        mostrar ? <div className="contador">{nroClicks}</div> :  null
    )
};