import { NextApiRequest, NextApiResponse } from "next";
import useAuth from "@/hooks/useContext/useAuth";
import { connectToUserDataDB } from "@/backend/mongodb/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const userType = req.body.userType;
  const user = req.body.user;
  const db = await connectToUserDataDB();

  console.log(userType);
  
  if (userType === "student") {
    const studentCollection = db.collection("Students");
    const insertedStudent = await studentCollection.insertOne({
      uid: user?.uid,
      email: user?.email,
      userType: userType,
      /* 
      TODO: Add all the other fields
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      studentNumber: req.body.studentNumber,
      program: req.body.program,
      year: req.body.year,
      courses: req.body.courses,
      projects: req.body.projects,
      skills: req.body.skills,
      interests: req.body.interests,
      bio: req.body.bio,
      resume: req.body.resume,
      linkedIn: req.body.linkedIn,
      github: req.body.github,
      website: req.body.website,
      profilePicture: req.body.profilePicture,
      isPublic: req.body.isPublic,
      isAvailable: req.body.isAvailable,
      isOnboarded: req.body.isOnboarded,
      isVerified: req.body.isVerified,
      isBanned: req.body.isBanned,
      isHidden: req.body.isHidden,
      isDeleted: req.body.isDeleted,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt, 
      */
    });
    return res.status(200).json({ message: "Student added to database" });

  } else if (userType === "coordinator") {
    const coordinatorCollection = db.collection("Coordinators");
    const insertedCoordinator = await coordinatorCollection.insertOne({
      uid: user?.uid,
      email: user?.email,
      userType: userType,
    });
    return res.status(200).json({ message: "Coordinator added to database" });

  } else if (userType === "company") {
    const companyCollection = db.collection("Companies");
    const insertedCompany = await companyCollection.insertOne({
      uid: user?.uid,
      email: user?.email,
      userType: userType,
    });
    return res.status(200).json({ message: "Company added to database" });

  } else {
    return res.status(400).json({ message: "Invalid user type" });
  }
}
