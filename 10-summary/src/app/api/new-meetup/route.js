import { MongoClient } from "mongodb";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sangepushashidhar:5I3qAa0TjmrLlNIr@nextjs-projects.4plwsfk.mongodb.net/?retryWrites=true&w=majority&appName=Nextjs-projects"
      );
      const db = client.db();

      const meetupCollections = db.collection("meetups");

      const result = await meetupCollections.insertOne({
        title,
        image,
        address,
        description,
      });

      console.log(result);
      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      
      res.status(500).json({ message: "Inserting meetup failed!" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
