import React, {useState} from "react";
import style from './page.modules.css';
import Boton from "./components/Boton";
import Contador from "./components/Contador";

export default function App(){
    const [nroClicks, setNumClicks] = useState(0);
    const [show, setShow] = useState(true);
    /*const mostrar */
    const click = () => {
      setNumClicks(nroClicks+1);
      console.log("CLICK");
    }
    const reiniciar = () => {
      setNumClicks(0)
      console.log("REINICIAR");
    }
    const clickMas3 = () => {
      setNumClicks(nroClicks+3);
    }
    const clickMenos3 = () => {
      setNumClicks(nroClicks-3);
    }
    const clickMas1 = () => {
      setNumClicks(nroClicks+1);
    }
    const clickMenos1 = () => {
      setNumClicks(nroClicks-1)
    }
    
    
    return (
      <div className={style.App}>
        <div className={style["contenedor-principal"]}>
          <Contador nroClicks={nroClicks} mostrar={show} />
          <div className={style["contenedor-botones-op"]}>
            <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3} />
            <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3} />
            <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1} />
            <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1} />
          </div>
          <div className={style['contenedor-botones']}>
          <Boton texto="Click" esBotonClick={true} funcionClick={click} />  
            <Boton texto="Reiniciar" esBotonClick={true} funcionClick={reiniciar} />
          </div>
        </div>
      </div>
    );
}