import type { NextApiRequest, NextApiResponse } from "next";

// Set HttpOnly Cookie
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "set-cookie",
    `auth=authenticated; Expires=Wed, 21 Oct 2025 07:28:00 GMT; HttpOnly; Path=/; SameSite=Strict;`
  );
  res.status(200).json({ status: "logged in" });
}
