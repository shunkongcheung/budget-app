import { NextApiRequest, NextApiResponse } from "next";

import { isUserLoggedIn, getValidatePayload } from "../../../utils";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await isUserLoggedIn(req.cookies.token);

  if (req.method === "PUT") {
    const data = await getValidatePayload(req.body);
    res.statusCode = 200;
    res.json(data);
  } else if (req.method === "DELETE") {
    res.statusCode = 204;
    res.send("");
  } else {
    res.statusCode = 404;
    res.json({ message: "Invalid method" });
  }
};
