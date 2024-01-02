import { createBrowserRouter } from "react-router-dom";
import Create from "component/create";
import App from "../App";
import Explore from "component/explore";
import Finishtemplate from "component/template/finishtemplate";
import Profile from "component/profile";
import Setting from "component/setting";

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
  {
    path: "/finish",
    element: <Finishtemplate />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
]);
