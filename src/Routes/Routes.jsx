import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/All Toys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ViewDeatils from "../Pages/ViewDetails/ViewDeatils";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDeatils></ViewDeatils>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addtoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/mytoy",
        element: <MyToys></MyToys>,
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
