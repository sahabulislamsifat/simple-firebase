import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-3">
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default Header;
