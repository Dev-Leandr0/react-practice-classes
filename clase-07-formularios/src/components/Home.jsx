import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Formularios</h1>
      <Link to="/form-basico">
        <button>Formulario Básico</button>
      </Link>

      <Link to="/form-hook">
        <button>Hook Formulario</button>
      </Link>
    </div>
  );
}

export default Home;
