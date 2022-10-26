import type { NextApiRequest, NextApiResponse } from "next";

// Delete cookie "auth"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "set-cookie",
    `auth=""; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Path=/; SameSite=Strict;`
  );
  res.status(200).json({ status: "logged out" });
}
