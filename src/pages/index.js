import React, { lazy } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { graphqlClient } from "../app/api";
import { firebase } from "../app/firebase";
import AccessibleNavigationAnnouncer from "../components/AccessibleNavigationAnnouncer";
import { selectUser, setUser } from "../features/auth/authSlice";
import Layout from "../containers/Layout";

const Main = lazy(() => import("./Main"));
const Collect = lazy(() => import("./collect"));
const Request = lazy(() => import("./Request"));
const Organize = lazy(() => import("./Organize"));
const Item = lazy(() => import("./Item"));
const Profile = lazy(() => import("./Profile"));
const Login = lazy(() => import("./Login"));

function App() {
  // const dispatch = useDispatch();
  const auth = getAuth(firebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // dispatch(setUser(user));
    } else {
      // dispatch(setUser(null));
    }
  });

  return (
    <>
    <h1>Main</h1>
    </>
  );
}

// function PrivateRoute() {
//   const user = useSelector(selectUser);
//   if (user) {
//     graphqlClient.setHeader(
//       // idk if this will work after token expires... somehow need auth.currentUser.getTokenId(true)
//       "authorization",
//       `Bearer ${user.stsTokenManager.accessToken}`
//     );
//   }
//   return user ? <Outlet /> : <Navigate to="/login" />;
// }

export default App;
