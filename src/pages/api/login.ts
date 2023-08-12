import { NextApiRequest, NextApiResponse } from "next";
import { connectToUserDataDB } from "@/backend/mongodb/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") {
    res.status(405).json({ message: "Only GET requests allowed" });
  }

  const uid = req.body.uid;

  const db = await connectToUserDataDB();

  const studentCollection = db.collection("Students");
  const coordCollection = db.collection("Coordinators");
  const companyCollection = db.collection("Companies");

  const student = studentCollection.findOne({ uid: uid });
  const coord = coordCollection.findOne({ uid: uid });
  const company = companyCollection.findOne({ uid: uid });

  if (student) {
    res.status(200).json(student);
  }

  if (coord) {
    res.status(200).json(coord);
  }

  if (company) {
    res.status(200).json(company);
  }

  res.status(404).json({ message: "User not found." });
}
