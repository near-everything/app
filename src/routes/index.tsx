import { createBrowserRouter } from "react-router-dom";
import Create from "component/create";
import App from "../App";
import Explore from "component/explore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);
