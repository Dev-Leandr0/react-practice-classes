import { useState } from "react"

function UseStateExample() {

  const [count, setCount] = useState(0);
  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const reset = () => setCount(0);

  const [visible, setVisible] = useState(false);

  const [texto, setTexto] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    let propiedad = e.target.name;
    let valor = e.target.value;
    setTexto({
      ...texto,
      [propiedad]: valor,
    });
  };

  return (
    <div>
      <h2>Ejemplo con useState</h2>
      <p>Contador: {count}</p>
      <button onClick={decrementar}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementar}>+</button>

      <h3>Ejemplo con Boolean</h3>
      <button onClick={() => setVisible(!visible)}>No tocar</button>
      {
        visible && <p>Esto ahora es visible</p>
      }

      <h3>Ejemplo con Text</h3>
      <input
        type="text"
        placeholder="Ingrese Nombre"
        onChange={handleChange}
        name="name"
        value={texto.name}
      />
      <br />
      <input
        type="text"
        placeholder="Ingrese su edad"
        onChange={handleChange}
        name="age"
        value={texto.age}
      />
      <p>{`Nombre: ${texto.name}`}</p>
      <p>{`Edad: ${texto.age}`}</p>
    </div>
  );
}

export default UseStateExample