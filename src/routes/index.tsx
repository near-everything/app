import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Exlpore from "component/exlpore";
import Create from "component/create";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exlpore",
    element: <Exlpore />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);
