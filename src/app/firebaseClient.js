import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const CLIENT_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function initFirebaseClientSDK() {
  if (!getApps().length) {
    initializeApp(CLIENT_CONFIG);
  }
  // If the user has provided the firebaseAuthEmulatorHost address, set the emulator
  if (process.env.NODE_ENV !== "production") {
    const auth = getAuth(getApp());
    connectAuthEmulator(auth, "http://localhost:9099", {
      disableWarnings: true,
    });
  }
}

export function getFirebaseStorage() {
  const st = getStorage(getApp());
  if (process.env.NODE_ENV !== "production") {
    connectStorageEmulator(st, "localhost", 9199);
  }
  return st;
}

export function getGoogleAnalytics() {
  return getAnalytics(getApp());
}
