import getFirebaseAdmin from "./getFirebaseAdmin";
const getLoggedInUser = (token: string) => {
  const admin = getFirebaseAdmin();
  return admin.auth().verifyIdToken(token);
};

export default getLoggedInUser;
