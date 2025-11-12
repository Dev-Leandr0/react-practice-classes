import React, { useState } from 'react'
import { CounterContext } from '../context/counterContext'


function UseContextExample({ children }) {

  const [counter, setCounter] = useState(0);


  const incremento = () => {
    setCounter(prev => prev + 1);
  }
  const decremento = () => {
    setCounter(prev => prev - 1);
  }

  const restart = () => {
    setCounter(0);
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        incremento,
        decremento,
        restart,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default UseContextExample