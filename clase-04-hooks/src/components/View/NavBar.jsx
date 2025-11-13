import { NavLink } from "react-router-dom";
function Navbar() {

  return (

    <div>

      <NavLink to="/" className={({ isActive }) =>
        isActive ? "active" : null
      }>Home </NavLink>
      <NavLink to="/useState">useState</NavLink>
      <NavLink to="/useEffect">useEffect</NavLink>
      <NavLink to="/useContext">useContext</NavLink>
      <NavLink to="/useRef">useRef</NavLink>
      <NavLink to="/useCustom">useCustom</NavLink>

    </div>
  );

}

export default Navbar;