import Create from "component/create";
import Explore from "component/explore";
import Profile from "component/profile";
import Finishtemplate from "component/template/finishtemplate";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Explore />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/finish",
    element: <Finishtemplate />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
