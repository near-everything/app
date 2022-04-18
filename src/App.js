import React, { lazy, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { firebase } from "./app/firebase";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/authSlice";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
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

function PrivateRoute({ children }) {
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
