import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="home" >
      <img src="/images/logo.png" alt="logo" className="w-35" />
    </NavLink>
  );
}

export default Logo
