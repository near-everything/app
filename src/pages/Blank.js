import React, { useState } from "react";
import { doc, setDoc, collection, getFirestore } from "firebase/firestore"; 
import {
  getAuth
} from "firebase/auth";
import { useClient } from "../context/DatabaseContext";
import PageTitle from "../components/Typography/PageTitle";

function Blank() {
  const [input, setInput] = useState("");
  const firebase = useClient();
  const auth = getAuth(firebase);
  const firestore = getFirestore(firebase);

  const insertListing = async () => {
    await setDoc(doc(collection(firestore, "items"), input), {
      name: input
    });
  };

  return (
    <>
      <PageTitle>Blank</PageTitle>
      <div className="flex flex-col">
        <input
          type="text"
          className="form-input px-4 py-3 rounded my-2"
          placeholder="Test"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={insertListing}
        >
          Button
        </button>
      </div>
    </>
  );
}

export default Blank;

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