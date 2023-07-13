import { connectToUserDataDB } from "@/backend/mongodb/connect";
import UserData from "@/model/UserData";
import { Db, ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Wrong request method" });
    return;
  }

  const user = req.body;

  const db = await connectToUserDataDB();
  if (!db) {
    res.status(500).json({ error: "Failed to connect to database" });
    return;
  }

  if (user.type === "student") {
    validateStudent(res, user, db);
  }

  if (user.type === "coord") {
    const db = await connectToUserDataDB();
    if (!db) {
      res.status(500).json({ error: "Failed to connect to database" });
      return;
    }
    const collection = db.collection("Coordinators");
    console.log(collection);
    const result = await collection.insertOne(user);
    console.log(result);
    res.status(200).json({ message: "Coordinator added to database" });
  }
}

async function validateStudent(
  res: NextApiResponse,
  student: UserData,
  db: Db
) {
  // If student doesn't exist, add them to the database. The _id field will be the uid property of the student object.
  // If student exists, update their information
  // const ObjectId = require('mongodb').ObjectId;
  // const uidToObjectId = ObjectId.createFromHexString(student.uid);
  const collection = db.collection("Students");
  const findStudent = await collection.findOne({ uid: student.uid });

  if (findStudent) {
    const updateResult = await collection.updateOne(
      { uid: student.uid },
      { $set: student }
    );
    console.log(updateResult);
    res.status(200).json({ message: "Student updated" });
  } else {
    // Student doesn't exist, inserting with specified uid
    const insertResult = await collection.insertOne({...student});
    console.log(insertResult);
    res.status(200).json({ message: "Student added to database" });
  }
}
