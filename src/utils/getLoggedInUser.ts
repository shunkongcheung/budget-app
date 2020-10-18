import getFirebaseAdmin from "./getFirebaseAdmin";
const getLoggedInUser = (token: string) => {
  const admin = getFirebaseAdmin();
  console.log("hey here...", token);
  return admin.auth().verifyIdToken(token);
};

export default getLoggedInUser;
