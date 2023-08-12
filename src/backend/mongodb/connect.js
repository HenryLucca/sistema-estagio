import { MongoClient } from "mongodb";
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectToUserDataDB() {
  await client.connect();
  const database = client.db("UserData");
  return database;
}