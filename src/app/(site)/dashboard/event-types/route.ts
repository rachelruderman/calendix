import mongoose from "mongoose";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  await mongoose.connect(process.env.MONGODB_URI!);
  const data = req.body;
  console.log(data);
  return Response.json("ok");
}
