import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  // const [user] = useAuthState(auth);

  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Private route */}
          <Route path="/*" element={<Layout />} />
          {/* <Route path="/" render={() => <Navigate to="/login" />} /> */}
        </Routes>
      </Router>
    </>
  );
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
