// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import { getSumOfCategory, getLoggedInUser } from "../../../utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getLoggedInUser(req.cookies.token);

  if (req.method === "GET") {
    res.statusCode = 200;
    const [bAndF, bill, supplies] = await Promise.all([
      getSumOfCategory("B&F", user.uid),
      getSumOfCategory("Bill", user.uid),
      getSumOfCategory("Supplies", user.uid),
    ]);
    res.json({ bAndF, bill, supplies });
  } else {
    res.statusCode = 404;
    res.json({ message: "Method not found" });
  }
};
