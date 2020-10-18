// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";

import { getSumOfCategory, getLoggedInUser } from "../../../utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ITEM_COUNT = 7;

  const user = await getLoggedInUser(req.cookies.token);
  const days = Array.from({ length: ITEM_COUNT + 1 }).map((_, idx: number) => {
    const day = moment();
    day.add(-(ITEM_COUNT - idx), "days");
    return day;
  });

  console.log(days);

  if (req.method === "GET") {
    res.statusCode = 200;
    const [bAndF, bill, supplies] = await Promise.all([
      Promise.all(
        Array.from({ length: ITEM_COUNT }).map((_, idx: number) =>
          getSumOfCategory("B&F", user.uid, days[idx], days[idx + 1])
        )
      ),
      Promise.all(
        Array.from({ length: ITEM_COUNT }).map((_, idx: number) =>
          getSumOfCategory("Bill", user.uid, days[idx], days[idx + 1])
        )
      ),
      Promise.all(
        Array.from({ length: ITEM_COUNT }).map((_, idx: number) =>
          getSumOfCategory("Supplies", user.uid, days[idx], days[idx + 1])
        )
      ),
    ]);

    res.json({ bAndF, bill, supplies });
  } else {
    res.statusCode = 404;
    res.json({ message: "Method not found" });
  }
};
