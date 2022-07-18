import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { graphqlClient } from "./app/api";
import { firebase } from "./app/firebase";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { selectUser, setUser } from "./features/auth/authSlice";

const Collect = lazy(() => import("./pages/Collect"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(firebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  });

  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Private route */}
          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<Collect />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function PrivateRoute() {
  const user = useSelector(selectUser);
  if (user) {
    graphqlClient.setHeader(
      // idk if this will work after token expires... somehow need auth.currentUser.getTokenId(true)
      "authorization",
      `Bearer ${user.stsTokenManager.accessToken}`
    );
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
