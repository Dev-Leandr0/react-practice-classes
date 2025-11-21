import React, { useState } from "react";
import { Link } from "react-router";

const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const NOMBRE_REGEX = /^[A-Za-z0-9_-]{5,}$/;

function validate({ nombre = "", email = "" }) {
  const errors = {};
  if (nombre.trim() && !NOMBRE_REGEX.test(nombre)) {
    errors.nombre = "Nombre invalido";
  }
  if (email.trim() && !EMAIL_REGEX.test(email)) {
    errors.email = "Email Invalido";
  }
  return errors;
}

function FormBasico() {
  const [errors, setErrors] = useState({});
  const handleBlur = (e) => {
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    rango: 0,
    fecha: "",
    genero: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const clave = e.target.name;
    const valor = e.target.value;

    setInputs({
      ...inputs,
      [clave]: valor,
    });
  };

  return (
    <>
      <h2>Formulario Basico</h2>
      <Link to="/">Back</Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={inputs.nombre}
          type="text"
          placeholder="Ingrese su Nombre"
          onChange={handleInputs}
          onBlur={handleBlur}
        />
        {errors.nombre && <p>{errors.nombre}</p>}

        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={inputs.email}
          type="text"
          placeholder="ingrese su email"
          onChange={handleInputs}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}

        <br />

        <label htmlFor="rango">Rango</label>
        <input
          type="range"
          name="rango"
          id="rango"
          value={inputs.rango}
          onChange={handleInputs}
        />
        <span>{inputs.rango}</span>
        <br />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          value={inputs.fecha}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="genero">
          Genero :
          <select
            onChange={handleInputs}
            value={inputs.genero}
            name="genero"
            id="genero"
          >
            <option value="Maculino">M</option>
            <option value="Femenino">F</option>
            <option value="Otros">0</option>
          </select>
        </label>

        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormBasico;
