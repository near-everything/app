import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./features/auth/authSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase } from "./app/firebase";

const Collect = lazy(() => import("./pages/Collect"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(firebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.uid))
    } else {
      dispatch(setUser(null))
    }
  })

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
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
