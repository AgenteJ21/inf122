import React, { useState } from "react";
import '../styles/Tablero.css';
import Cuadro from './Cuadro'

export default function TableroB() {
    const [valor, setValor] = useState("X");
    const click = () => {
        if(valor === "X"){
            setValor("O");
        }else{
            setValor("X");
        }
    }
    return (
        <div className="tablero">
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
            <Cuadro valor={valor} funcion={click} />
        </div>
    )
}