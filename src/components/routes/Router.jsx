import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Home from "../layouts/Home";
import Login from "../authentication/login";
import Signup from "../authentication/signup";
import Forget from "../authentication/Forget";
import AllBooks from "../pages/AllBooks";
import CategoryBooks from "../pages/CategoryBooks";
import BookDetails from "../pages/BookDetails";
import UpdateBooks from "../pages/UpdateBooks";
import PrivateRoutes from "./private/PrivateRoutes";
import BorrowModal from "../shared/modals/BorrowModal";

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
        element: (
          <PrivateRoutes>
            <AllBooks />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "/books/category/:name",
        element: <CategoryBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/category?name=${params.name}`),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoutes>
            <BookDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/books/edit/:id",
        element: (
          <PrivateRoutes>
            <UpdateBooks />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/add/book",
        element: <div>add new books</div>,
      },
      {
        path: "/user/borrowed",
        element: <BorrowModal />,
      },
    ],
  },
]);
