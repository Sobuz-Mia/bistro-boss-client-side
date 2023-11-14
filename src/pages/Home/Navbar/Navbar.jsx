import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loggedOut } = useAuth();
  const navigate = useNavigate();
  const handleLoggedOut = () => {
    loggedOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User log out successfully",
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/');
  };
  const navLinks = (
    <>
      <li className="uppercase text-lg font-semibold ">
        <NavLink className="hover:text-black hover:bg-base-200" to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink className="hover:text-black hover:bg-base-200" to={"/contact"}>
          CONTACT us
        </NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink
          className="hover:text-black hover:bg-base-200"
          to={"dashboard"}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink className="hover:text-black hover:bg-base-200" to={"/menu"}>
          Our Menu
        </NavLink>
      </li>
      <li className="uppercase text-lg font-bold ">
        <NavLink
          className="hover:text-black hover:bg-base-200"
          to={"/order/salad"}
        >
          Our Shop
        </NavLink>
      </li>
      {user ? (
        <li className="uppercase text-lg font-bold ">
          <NavLink
            onClick={handleLoggedOut}
            className="hover:text-black hover:bg-base-200"
            to={"/login"}
          >
            Log out
          </NavLink>
        </li>
      ) : (
        <li className="uppercase text-lg font-bold ">
          <NavLink className="hover:text-black hover:bg-base-200" to={"/login"}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#151515] text-white fixed z-10 max-w-screen-xl mx-auto opacity-60">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
          <span className="-mt-4" style={{ letterSpacing: "5px" }}>
            Restaurant
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white ">{navLinks}</ul>
      </div>
      <div>
    {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </label>}
      </div>
    </div>
  );
};

export default Navbar;
