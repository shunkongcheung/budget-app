import moment, { Moment } from "moment";
import getFirebaseAdmin from "./getFirebaseAdmin";

const getSumOfCategory = async (
  category: string,
  uid: string,
  start?: Moment,
  end?: Moment
) => {
  // TODO:
  // using firebase admin's firestore to query database
  // calculate sum per category
  return 0;
};

export default getSumOfCategory;
