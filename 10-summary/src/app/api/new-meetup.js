// /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://sangepushashidhar:Shashi121@nextjs-projects.4plwsfk.mongodb.net/?retryWrites=true&w=majority&appName=Nextjs-projects"
    );
    const db = client.db();

    const meetupCollections = db.collection("meetups");

    const result = await meetupCollections.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetups data inserted successfully" });
  }
};

export default handler;
