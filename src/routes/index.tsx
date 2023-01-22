import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Exlpore from "component/exlpore";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exlpore",
    element: <Exlpore />,
  },
]);
