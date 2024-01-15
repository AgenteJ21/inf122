import './App.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import { useState } from 'react';

function App() {
  /**/const click = () => {
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
  const [nroClicks, setNumClicks] = useState(0);
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks} />
        <div className='contenedor-botones-op'>
          <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3} />
          <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3} />
          <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1} />
          <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1} />
        </div>
        <div className='contenedor-botones'>
        <Boton texto="Click" esBotonClick={true} funcionClick={click} />  
          <Boton texto="Reiniciar" esBotonClick={true} funcionClick={reiniciar} />
        </div>
      </div>
    </div> 
  );
}

export default App;
