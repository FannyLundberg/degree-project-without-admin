import { NextApiRequest, NextApiResponse } from "next";

const { connectToDatabase } = require("../../lib/mongodb");

// Hämta alla sponsorer
async function getSponsors(res: NextApiResponse) {
  try {
    let { db } = await connectToDatabase();

    let allSponsors = await db.collection("sponsors").find({}).toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(allSponsors)),
      success: true,
    });
  } catch (error) {
    return res.json({ message: "error", success: false });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      return getSponsors(res);
    }
  }
}
