import React, { useContext } from 'react'
import { CounterContext } from '../../context/counterContext'

function Footer() {


  const { counter } = useContext(CounterContext);
  return (
    <div>
      <p>soy el footer</p>
      <p>Este contador viene de counter Context {counter}</p>
    </div>
  )
}

export default Footer