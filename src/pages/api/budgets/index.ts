import { NextApiRequest, NextApiResponse } from "next";

import { isUserLoggedIn, getValidatePayload } from "../../../utils";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await isUserLoggedIn(req.cookies.token);

  const data = await getValidatePayload(req.body);

  console.log(data);

  res.statusCode = 200;
  res.json(data);
};
