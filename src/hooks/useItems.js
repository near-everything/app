import React from "react";
import {
  useFirestoreInfiniteQuery,
  useFirestoreQuery,
} from "@react-query-firebase/firestore";
import { query, startAfter } from "firebase/firestore";

export const useInfiniteItems = (q) => {
  const [records, setRecords] = React.useState([]);
  const items = useFirestoreInfiniteQuery("items", q, (snapshot) => {
    const lastDocument = snapshot.docs[snapshot.docs.length - 1];

    // Get the next 20 documents starting after the last document fetched.
    return query(q, startAfter(lastDocument));
  });

  React.useEffect(() => {
    if (items.data?.pages) {
      setRecords([]);
      items.data.pages.forEach((page) =>
        page.docs.forEach((docSnapshot) => {
          const rawRecord = docSnapshot.data();

          setRecords((prevState) => [
            ...prevState,
            {
              id: docSnapshot.id,
              ...rawRecord,
              // createdAt: rawRecord.createdAt.toDate(),
              // updatedAt: rawRecord.updatedAt?.toDate(),
            },
          ]);
        })
      );
    }
  }, [items.data?.pages]);

  return { isLoading: items.isLoading, items: records };
};

export const useItems = (q) => {
  const [records, setRecords] = React.useState([]);
  const items = useFirestoreQuery(["items"], q, {
    subscribe: true,
  });

  React.useEffect(() => {
    if (items.data?.docs) {
      setRecords(
        items.data.docs.map((docSnapshot) => {
          const rawRecord = docSnapshot.data();

          return {
            id: docSnapshot.id,
            ...rawRecord,
            // createdAt: rawRecord.createdAt.toDate(),
            // updatedAt: rawRecord.updatedAt?.toDate(),
          };
        })
      );
    }
  }, [items.data?.docs]);

  return { isLoading: items.isLoading, items: records };
};
