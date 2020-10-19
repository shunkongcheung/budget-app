import { NextApiRequest, NextApiResponse } from "next";

import {
  getFirebaseAdmin,
  getLoggedInUser,
  getValidatePayload,
} from "../../../utils";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const user = await getLoggedInUser(req.cookies.token);

  const db = getFirebaseAdmin().firestore();
  const existingData = (
    await db
      .collection("budgets")
      .doc(id as string)
      .get()
  ).data();

  if (existingData.createdBy !== user.uid) {
    res.statusCode = 404;
    res.json({ message: "Data not found" });
    return;
  }

  if (req.method === "GET") {
    res.statusCode = 200;
    res.json(existingData);
    return;
  } else if (req.method === "PUT") {
    const data = await getValidatePayload(req.body);
    await db
      .collection("budgets")
      .doc(id as string)
      .set({ ...data, createdBy: user.uid });

    res.statusCode = 200;
    res.json(data);
    return;
  } else if (req.method === "DELETE") {
    await db
      .collection("budgets")
      .doc(id as string)
      .delete();

    res.statusCode = 204;
    res.send("");
  } else {
    res.statusCode = 404;
    res.json({ message: "Invalid method" });
  }
};
