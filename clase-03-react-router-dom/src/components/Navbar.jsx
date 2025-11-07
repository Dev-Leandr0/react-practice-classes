import { NavLink } from "react-router-dom";
function Navbar() {

  return (

    <div>

      <NavLink to="/" className={({ isActive }) =>
        isActive ? "active" : null
      }>Home </NavLink>
      {/*       <NavLink to="Detail">Details</NavLink> */}
      <NavLink to="About">About</NavLink>
      <NavLink to="Product">Product</NavLink>
      <NavLink to="Cursos">Cursos</NavLink>
    </div>
  );

}

export default Navbar;