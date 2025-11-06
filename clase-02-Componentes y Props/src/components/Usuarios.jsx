import { useState } from "react";

function Usuarios({ usuarios }) {

  const [selectedId, setSelectedId] = useState(null);
  const verDetalles = (id) => setSelectedId(id);
  const ocultarDetalles = () => setSelectedId(null)

  return (
    <>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            Nombre: {usuario.name}

            {selectedId === usuario.id && (
              <>
                <p>Username: {usuario.username}</p>
                <p>Email: {usuario.email}</p>
              </>
            )}

            {selectedId === usuario.id ? (
              <button onClick={ocultarDetalles}>Ocultar Detalles</button>
            ) : (
              <button onClick={() => verDetalles(usuario.id)}>Ver Detalles</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Usuarios;