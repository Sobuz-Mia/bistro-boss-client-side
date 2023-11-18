import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menus from "../pages/Menu/Menus/Menus";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dahboard/Cart/Cart";
import AllUsers from "../pages/dahboard/Cart/AllUsers/AllUsers";
import AddItem from "../pages/dahboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/dahboard/ManageItems/ManageItems";
import UpdateMenu from "../pages/dahboard/UpdateMenu/UpdateMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menus />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      // admin routes
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
      {
        path:'manageItems',
        element:<ManageItems/>
      },
      {
        path:'updateMenu/:id',
        element:<UpdateMenu/>,
        loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ],
  },
]);
