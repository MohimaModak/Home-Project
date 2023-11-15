import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbarfont flex justify-around items-center text-slate-600 bg-slate-100 font-bold text-2xl p-5 shadow-2xl m-5">
      <div>
        <NavLink
          to="/"
          className={`pl-5 ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
        >
          Home
        </NavLink>
        <NavLink
          to="/flights"
          className={`pl-5 ({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""`}
        >
          Tenant
        </NavLink>
        <NavLink
          to="/carrentals"
          className={`pl-5 ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
        >
          Identify
        </NavLink>
      </div>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Log-in
      </NavLink>
    </div>
  );
};

export default Navbar;
