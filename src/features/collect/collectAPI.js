import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, st } from "../../app/firebase";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export async function storeImages(item, user) {
  let urls = [];
  for (const img of item.media) {
    const storageRef = ref(st, `images/${user}/${Timestamp.now()}`);
    const snapshot = await uploadBytes(storageRef, img);
    const downloadURL = await getDownloadURL(snapshot.ref);
    urls.push(downloadURL);
  }
  return urls;
}

export async function insertItem(item, user) {
  const urls = await storeImages(item, user);
  const itemsRef = collection(db, "items");
  return new Promise((resolve, reject) => {
    addDoc(itemsRef, {
      ...item,
      media: urls,
      createdBy: user,
      createdTimestamp: Timestamp.now(),
      updatedTimestamp: Timestamp.now(),
      isValidated: false,
    }).then(resolve());
  });
}
