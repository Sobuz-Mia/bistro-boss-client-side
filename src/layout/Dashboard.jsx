import { FaCalendar, FaCartArrowDown, FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillPayCircle } from "react-icons/ai";
import { MdPreview } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-[#D1A054] px-9 py-6 text-center">
        <h2 className="text-2xl font-extrabold uppercase">Bistro boss</h2>
        <span className="text-center text-2xl" style={{ letterSpacing: "5px" }}>
          Restaurant
        </span>
        <ul className="menu p-2">
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/userHome'}>
              <FaHome/>User Home
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/payment'}>
            <AiFillPayCircle /> Payment History
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/cart'}>
              <FaCartArrowDown /> My cart
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/review'}>
            <MdPreview /> Add Review
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/myBooking'}>
            <FaCalendar/> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="list-none mb-2">
            <NavLink to={'/'}>
              <FaHome/>Home
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={'/dashboard/menu'}>
              <FaSearch/>Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
