// /api/new-meetup
import { MongoClient } from "mongodb";

export async function POST(req, res) {
  const data = req.body;

  const { title, image, address, description } = data;

  try {
    const client = await MongoClient.connect(
      "mongodb+srv://sangepushashidhar:5I3qAa0TjmrLlNIr@nextjs-projects.4plwsfk.mongodb.net/?retryWrites=true&w=majority&appName=Nextjs-projects"
    );
    const db = client.db();

    const meetupCollections = db.collection("meetups");

    const result = await meetupCollections.insertOne(data);

    console.log(result, 'result from api');
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  } catch (error) {
    res.status(400).json({ message: "Inserting meetup failed!" });
  }
}
