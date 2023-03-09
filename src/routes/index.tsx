import Create from "component/create/index";
import Explore from "component/explore";
import Profile from "component/profile";
import Finishtemplate from "component/thing";
import { createBrowserRouter } from "react-router-dom";
import { dbPromise } from "services/db";
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
    path: "/thing/:thingId",
    element: <Finishtemplate />,
    loader: async ({ params }) => {
      const thing = await (await dbPromise).get("things", parseInt(params.thingId!))
      return thing;
      
    }
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
