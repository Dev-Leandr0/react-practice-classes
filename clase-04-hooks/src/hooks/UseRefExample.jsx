import React, { useRef, useState } from 'react'

function UseRefExample() {

  const [start, setStart] = useState(false);

  const ref = useRef(0);

  const clicksCounter = () => {
    ref.current += 1;

    if (ref.current == 1) {
      document.body.style.background = 'black'
    }
    if (ref.current >= 5) {
      setStart(true)
      document.body.style.background = 'red'
    }
  }

  const mostrar = () => {
    console.log(ref.current);
  }

  const cero = () => {
    ref.current = 0;
    console.log('Reiniciado a:', ref.current);
  }

  return (
    <div>
      <h2>UseRefExample</h2>
      {start && <h1>Limites de clicks realizados</h1>}
      <button onClick={clicksCounter}>No tocar</button>
      <button onClick={mostrar}>Ver Clicks</button>
      <button onClick={cero}>Reset</button>
    </div>
  );
}

export default UseRefExample