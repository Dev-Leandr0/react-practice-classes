import { useEffect, useState } from "react";
import Usuarios from "./Usuarios";

function Home() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
  }, []);

  return (
    <div>
      <h1>
        Bienvenido a nuestra tienda online
      </h1>
      <Usuarios usuarios={usuarios} />
    </div>
  );
};

export default Home;