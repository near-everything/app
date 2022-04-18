import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./features/auth/authSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
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
            <Route path="/*" element={<Layout />} />
          </Route>
          {/* <Route path="/" render={() => <Navigate to="/login" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

function PrivateRoute() {
  const user = useSelector(selectUser);
  return user ? <Outlet /> : <Navigate to="/login" />;
}
// function SendInvites({ user }) {
//   const query = firestore.collection('invites').where('sender', '==', user.uid);
//   const [invites] = useCollectionData(query);

//   const [digits, setDigits] = useState('');
//   const phoneNumber = `+1${digits}`;

//   const sendInvite = async () => {
//     const inviteRef = firestore.collection('invites').doc(phoneNumber);
//     await inviteRef.set({
//       phoneNumber,
//       sender: user.uid,
//     });
//   };

//   return (
//     <div>
//       <h1>Invite your BFFs</h1>
//       {invites?.map((data) => (
//         <p>You invited {data?.phoneNumber}</p>
//       ))}

//       {invites?.length < 2 && (
//         <>
//           <input value={digits} onChange={(e) => setDigits(e.target.value)} />
//           <button onClick={sendInvite}>Send Invite</button>
//         </>
//       )}

//       <button onClick={() => auth.signOut()}>Sign Out</button>
//     </div>
//   );
// }

export default App;
