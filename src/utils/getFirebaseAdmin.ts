import admin from "firebase-admin";

const getFirebaseAdmin = () => {
  try {
    const serviceAccount = {
      type: "service_account",
      project_id: "budget-app-be403",
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CERT_URL,
    };

		console.error('getting service from ', JSON.stringify(serviceAccount, null, 4))
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL: "https://budget-app-be403.firebaseio.com",
    });
    return admin;
  } catch (error) {
    // https://leerob.io/blog/nextjs-firebase-serverless
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error("Firebase admin initialization error", error.stack);
      throw Error(error);
    }
    return admin;
  }
};

export default getFirebaseAdmin;
