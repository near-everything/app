import React, { useState } from "react";
import { useFirestoreQuery, useFirestoreDocumentDeletion } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  doc,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

import { db } from "../../app/firebase";
import Delete from "./Delete";

function List() {
  const ref = query(collection(db, "items"));
  const q = useFirestoreQuery(["items"], ref, {
    subscribe: true,
  });

  if (q.isLoading) {
    return <div>Loading...</div>;
  }

  const snapshot = q.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();

    return <div className="text-white" key={docSnapshot.id}>
      {data.name}
      <Delete id={docSnapshot.id} />
      </div>;
  });
}

export default List;
