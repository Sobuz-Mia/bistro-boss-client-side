import {
  FaBook,
  FaCalendar,
  FaCartArrowDown,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillPayCircle } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: next time admin dynamically change hobe
  const [isAdmin] = useAdmin();
  // const isAdmin = true;
  return (
    <div className="flex gap-10 ">
      <div className="w-64 min-h-screen bg-[#D1A054] px-9 py-6 text-center">
        <h2 className="text-2xl font-extrabold uppercase">Bistro boss</h2>
        <span className="text-center text-2xl" style={{ letterSpacing: "5px" }}>
          Restaurant
        </span>
        <ul className="menu p-2">
          {isAdmin ? (
            <>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/addItem"}>
                  <FaUtensils/> Add Items
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList/> Manage Items
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook /> Manage Booking
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers/>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome />
                 Reservation
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/payment"}>
                  <AiFillPayCircle /> Payment History
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/cart"}>
                  <FaCartArrowDown /> My cart
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/review"}>
                  <MdPreview /> Add Review
                </NavLink>
              </li>
              <li className="list-none mb-2">
                <NavLink to={"/dashboard/myBooking"}>
                  <FaCalendar /> My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* Shared dashboard */}
          <div className="divider"></div>
          <li className="list-none mb-2">
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={"/dashboard/menu"}>
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li className="list-none mb-2">
            <NavLink to={"/dashboard/contact"}>
              <FaEnvelope /> Contact
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
