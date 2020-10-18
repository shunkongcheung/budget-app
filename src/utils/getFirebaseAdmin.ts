import admin from "firebase-admin";

import serviceAccount from "./budget-app-be403-firebase-adminsdk-rqr8p-06bb159b90.json";

const getFirebaseAdmin = () => {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL: "https://budget-app-be403.firebaseio.com",
    });
  } catch (error) {
    // https://leerob.io/blog/nextjs-firebase-serverless
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error("Firebase admin initialization error", error.stack);
    }
  }
  return admin;
};

export default getFirebaseAdmin;
