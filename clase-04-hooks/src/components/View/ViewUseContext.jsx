import React, { useContext } from 'react'
import { CounterContext } from '../../context/counterContext';
import Footer from './Footer';


function ViewUseContext() {
  const { counter, incremento, decremento } = useContext(CounterContext);

  return (
    <div>
      <h1>ViewUseContext</h1>
      <button onClick={incremento}>+</button >
      <h3>{counter}</h3>
      <button onClick={decremento}>-</button >
      <Footer />
    </div>

  )
}

export default ViewUseContext