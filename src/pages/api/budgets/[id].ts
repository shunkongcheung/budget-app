import { NextApiRequest, NextApiResponse } from "next";

import { getValidatePayload } from "../../../utils";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  console.log("on fetching budget with id", id);

  if (req.method === "GET") {
    // TODO: fetch real data
    res.statusCode = 200;
    res.json({
      id: "item1",
      title: "Eat with my babe",
      category: "B&F",
      date: new Date().toISOString(),
      amount: 20.5,
    });
  }
  if (req.method === "PUT") {
    const data = await getValidatePayload(req.body);

    // TODO: update data

    res.statusCode = 200;
    res.json(data);
  } else if (req.method === "DELETE") {
    // TODO: delete data

    res.statusCode = 204;
    res.send("");
  } else {
    res.statusCode = 404;
    res.json({ message: "Invalid method" });
  }
};
