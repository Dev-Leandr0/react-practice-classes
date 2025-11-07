import { Link, Outlet } from "react-router-dom"

function Cursos() {
  return (
    <div>
      <h2>Cursos</h2>

      <Link to="Frontend" >Frontend</Link>
      <Link to="Backend" >Backend</Link>
      <Outlet />
    </div>
  )
}

export default Cursos