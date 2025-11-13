import React from 'react'
import useCounter from '../../hooks/useCounter'

function ViewUseCustom() {

  const contadorA = useCounter();
  const contadorB = useCounter(20);
  return (
    <div>

      <h1>Hooks Custom</h1>
      <p>Estos contadores usan un hook custom llamado useCounter</p>
      <h2>Contador A</h2>
      <h3>{contadorA.counter}</h3>
      <button onClick={contadorA.incrementar}>+</button>
      <button onClick={contadorA.reset}>[]</button>
      <button onClick={contadorA.decrementar}>-</button>

      <h2>Contador B</h2>
      <h3>{contadorB.counter}</h3>
      <button onClick={contadorB.incrementar}>+</button>
      <button onClick={contadorB.reset}>[]</button>
      <button onClick={contadorB.decrementar}>-</button>

    </div>
  )
}

export default ViewUseCustom