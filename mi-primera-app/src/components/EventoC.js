import React from "react";
import "../styles/Evento.css";
function EventoC({image, title, dateLiteral, placeLiteral, description}){
    return (
        <div className="card-container">
            <img className="card-image"
            src={require(`..imagenes/${image}.webp`)}
            alt="Foto evento" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{dateLiteral}</p>
                <p className="card-place">{placeLiteral}</p>
                {description.map((line,index)=>(line))}
            </div>
        </div>
    )
}

export default EventoC;