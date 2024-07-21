import MeetupList from "./components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Charminar_600.jpg",
    address: "Charminar , Hyderabad",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://t-hub.co/wp-content/uploads/2023/10/t-hub-government-570x390.jpg",
    address: "T-Hub , Hyderabad",
    description: "This is the Second meetup",
  },
];

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
