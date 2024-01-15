import React from "react";
import '../styles/Contador.css';

export default function Contador({nroClicks}){
    return (
        <div className="contador">
            {nroClicks}
        </div>
    )
};