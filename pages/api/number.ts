// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// it should not be a react components

import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ num: Math.random() * 10 })
}
