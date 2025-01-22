import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Home from "../layouts/Home";
import Login from "../authentication/login";
import Signup from "../authentication/signup";
import Forget from "../authentication/Forget";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Signup />,
      },
      {
        path: "/auth/reset",
        element: <Forget />,
      },
      {
        path: "/books",
        element: <div>books</div>,
      },
      {
        path: "/add/book",
        element: <div>add new books</div>,
      },
      {
        path: "/user/borrowed",
        element: <div>add new books</div>,
      },
    ],
  },
]);
