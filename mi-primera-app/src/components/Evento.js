import React from "react";
import
import '../styles/Evento.css';
function Evento() {
    return (
        <div className="card-container">
        <img className="card-image"
        src={require("../imagenes/pyPizza.webp")} 
        alt="Foto del evento"/>
        <div className="card-content">
            <div className="card-title">
                <h2>Py Pizza 03 - PyPuzzle</h2>
            </div>
            <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
            <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
            <p className="card-description">¡Hola Pythonista!
                Participa en este Evento Presencial de la comunidad Python La Paz
                ¿Cuánto conoces de Python?
                Aprende a trabajar en equipo resolviendo increíbles acertijo
                ¡Anímate a ser parte de esta actividad!</p>
            <div className="card-icons">
                <img className="icons" 
                src={require("../icons/facebook.svg")}
                alt="" />
                <img className="icons" 
                src={require("../icons/youtube.svg")}
                alt="" />
                <img className="icons"
                src={require("../icons/twitter.svg")}
                alt="" /> 
            </div>    
        </div>
    </div>
    );
}

export default Evento;