// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";

import { getValidatePayload } from "../../../utils";

// TODO:
// to be removed when complete
const getRandomDate = (start: Date) => {
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
const start0 = new Date();
start0.setDate(start0.getDate() - 10);

const start1 = new Date();
start1.setHours(start1.getHours() - 3);

const start2 = new Date();
start2.setMinutes(start2.getMinutes() - 10);

const fakeData = [
  {
    id: "item1",
    title: "Eat with my babe",
    category: "B&F",
    date: getRandomDate(start0).toISOString(),
    amount: 20.5,
  },
  {
    id: "item2",
    title: "Purchased some medicine",
    category: "Supplies",
    date: getRandomDate(start1).toISOString(),
    amount: 45.2,
  },
  {
    id: "item3",
    title: "Mobile Phone",
    category: "Bill",
    date: getRandomDate(start2).toISOString(),
    amount: 30.5,
  },
  {
    id: "item4",
    title: "Lunch",
    category: "B&F",
    date: getRandomDate(new Date()).toISOString(),
    amount: 15,
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // TODO:
    // fetch real data
    res.statusCode = 200;
    const data = fakeData;
    res.json(data);
  }
  if (req.method === "POST") {
    const data = await getValidatePayload(req.body);

    // TODO:
    // handle create data

    res.statusCode = 200;
    res.json(data);
  }
};
