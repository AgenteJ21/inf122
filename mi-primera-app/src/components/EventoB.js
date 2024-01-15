import React from "react";
import '../styles/Evento.css';

function EventoB(props) {
    return (
    <div className="card-container">
        <img className="card-image"
            src={require(`../imagenes/${props.image}.webp`)}
            alt="Foto del evento" />
        <div className="card-content">
            <div className="card-title">
                <h2>{props.title}</h2>
            </div>
            <p className="card-date">{props.dateLiteral}</p>
            <p className="card-place">{props.placeLiteral}</p>
            <p className="card-description">{props.description}</p>    
        </div>
    </div>
    );
}

export default EventoB;