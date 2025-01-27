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
import BorrowedBooks from "../pages/BorrowedBooks";
import AddBook from "../pages/AddBook";
import DynamicTitle from "../shared/dynamic_title/DynamicTitle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />

        {/* <DynamicTitle title={"Home"} /> */}
      </>
    ),
    children: [
      {
        path: "",
        element: (
          <>
            <Homepage />
            <DynamicTitle title={"Home"} />
          </>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <>
            <Login />
            <DynamicTitle title={"Login"} />
          </>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <>
            <Signup />
            <DynamicTitle title={"Signup"} />
          </>
        ),
      },
      {
        path: "/auth/reset",
        element: (
          <>
            <Forget />
            <DynamicTitle title={"Forget"} />
          </>
        ),
      },
      {
        path: "/books",
        element: (
          <PrivateRoutes>
            <AllBooks />
            <DynamicTitle title={"All Books"} />
          </PrivateRoutes>
        ),
        loader: async () => {
          const result = await fetch("http://localhost:5000/books");
          return await result.json();
        },
      },
      {
        path: "/books/category/:name",
        element: (
          <>
            <CategoryBooks />
            <DynamicTitle title={"Login"} />
          </>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/category?name=${params.name}`),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoutes>
            <BookDetails />
            <DynamicTitle title={"Book Details"} />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/books/edit/:id",
        element: (
          <PrivateRoutes>
            <UpdateBooks />
            <DynamicTitle title={"Update Book"} />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/add/book",
        element: (
          <PrivateRoutes>
            <AddBook />
            <DynamicTitle title={"Add Book"} />
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/borrowed",
        element: (
          <PrivateRoutes>
            <BorrowedBooks />
            <DynamicTitle title={"Borrowed Book"} />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
