import moment, { Moment } from "moment";
import getFirebaseAdmin from "./getFirebaseAdmin";

const getSumOfCategory = async (
  category: string,
  uid: string,
  start?: Moment,
  end?: Moment
) => {
  const db = getFirebaseAdmin().firestore();
  const snapshot = await db.collection("budgets").get();

  let sum = 0;
  snapshot.forEach((doc) => {
    const item = doc.data();
    if (
      item.createdBy === uid &&
      item.category === category &&
      (!start || moment(item.date.toDate()) >= start) &&
      (!end || moment(item.date.toDate()) <= end)
    )
      sum += item.amount;
  });

  return sum;
};

export default getSumOfCategory;
