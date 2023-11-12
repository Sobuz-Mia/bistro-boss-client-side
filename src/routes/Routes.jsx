import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menus from "../pages/Menu/Menus/Menus";
import Order from "../pages/Order/Order";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menus/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        }
      ]
    },
  ]);