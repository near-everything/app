import { createBrowserRouter } from "react-router-dom";

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
]);
