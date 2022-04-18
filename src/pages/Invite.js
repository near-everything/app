import React, { useState, useEffect } from "react";
import { collection, doc, query, where, orderBy, onSnapshot, setDoc, Timestamp } from "firebase/firestore";

import { selectUser } from "../features/auth/authSlice";
import PageTitle from "../components/Typography/PageTitle";
import { useSelector } from "react-redux";
import { db } from "../app/firebase";

function Invite() {
  const [invites, setInvites] = useState([]);
  const [digits, setDigits] = useState('');
  const user = useSelector(selectUser);
  const invitesRef = collection(db, 'invites');

  const phoneNumber = `+1${digits}`;

  const sendInvite = async () => {
    try {
      await setDoc(doc(db, "invites", phoneNumber), {
        sender: user,
        createdTimestamp: Timestamp.now()
      })
    } catch(e) {
      console.log(e)
    }
  };

  useEffect(() => {
    const q = query(invitesRef, where("sender", "==", user), orderBy('createdTimestamp', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setInvites(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [invitesRef, user])

  return (
    <div>
      <h1>Invite your BFFs</h1>
      {invites?.map((data, index) => (
        <p key={index} className="text-white">You invited {data?.id}</p>
      ))}

      {invites?.length < 2 && (
        <>
        <input
          type="text"
          className="form-input px-4 py-3 rounded my-2"
          placeholder="digits"
          value={digits}
          onChange={(e) => setDigits(e.target.value)}
        />
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={sendInvite}
        >
          Invite
        </button>
        </>
      )}

      {/* {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
    </div>
  );
}

export default Invite;
