// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import {
  getFirebaseAdmin,
  getLoggedInUser,
  getValidatePayload,
} from "../../../utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getLoggedInUser(req.cookies.token);
  const db = getFirebaseAdmin().firestore();
  const docRef = db.collection("budgets");

  if (req.method === "GET") {
    res.statusCode = 200;
    const snapshot = await docRef.where("createdBy", "==", user.uid).get();
    if (snapshot.empty) {
      res.json([]);
    } else {
      const data = [];
      snapshot.forEach((doc) => {
        const item = doc.data();
        data.push({ ...item, id: doc.id, date: item.date.toString() });
      });
      res.json(data);
    }
  }
  if (req.method === "POST") {
    const data = await getValidatePayload(req.body);

    await docRef.doc().set({ ...data, createdBy: user.uid });

    res.statusCode = 200;
    res.json(data);
  }
};
