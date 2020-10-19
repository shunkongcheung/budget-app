import { Moment } from "moment";
import getFirebaseAdmin from "./getFirebaseAdmin";

const getSumOfCategory = async (
  category: string,
  uid: string,
  start?: Moment,
  end?: Moment
) => {
  const db = getFirebaseAdmin().firestore();
  let query = db
    .collection("budgets")
    .where("createdBy", "==", uid)
    .where("category", "==", category);

  if (start) query = query.where("date", ">=", start);
  if (end) query = query.where("date", "<", end);

  const snapshot = await query.get();

  let sum = 0;
  snapshot.forEach((doc) => {
    const item = doc.data();
    sum += item.amount;
  });

  return sum;
};

export default getSumOfCategory;
