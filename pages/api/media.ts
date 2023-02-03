import { NextApiRequest, NextApiResponse } from "next";

const { connectToDatabase } = require("../../lib/mongodb");

// Hämta all media
async function getMedia(res: NextApiResponse) {
  try {
    let { db } = await connectToDatabase();

    let allMedia = await db.collection("media").find({}).toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(allMedia)),
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
      return getMedia(res);
    }
  }
}
