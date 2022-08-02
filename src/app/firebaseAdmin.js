import admin from "firebase-admin";

const getFirebaseAdmin = () => {
  if (!admin.apps.length) {
    if (process.env.NODE_ENV === "production") {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_SDK_CONFIG || "")),
      });
    } else {
      process.env["FIREBASE_AUTH_EMULATOR_HOST"] = "localhost:9099";
      admin.initializeApp({
        projectId: "demo-everything",
      });
    }
  }
  return admin;
};

export default getFirebaseAdmin;
