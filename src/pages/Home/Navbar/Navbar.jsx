import { NavLink } from "react-router-dom";

const Navbar = () => {
    // const logoStyle = {
    //     letter-spacing: 5px;
    // }
  const navLinks = (
    <>
      <li className="uppercase text-lg font-semibold ">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink to={"/contact"}>CONTACT us</NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink to={"dashboard"}>DASHBOARD</NavLink>
      </li>
      <li className="uppercase text-lg font-bold">
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li className="uppercase text-lg font-bold text-white">
        <NavLink to={"/order"}>Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#151515] text-white fixed z-10 max-w-screen-xl mx-auto opacity-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
          <span className="-mt-4" style={{letterSpacing: '5px'}}>Restaurant</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
