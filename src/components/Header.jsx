import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-green-600 text-2xl font-semibold p-2 text-black flex gap-3 mb-4 mt-80">
      <NavLink className="hover:text-red-400" to="/home">
        Home{" "}
      </NavLink>
      <NavLink className="hover:text-red-400" to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default Header;
