import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
