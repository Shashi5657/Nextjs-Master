import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { addMeetupHandler } from "../libs/util";

const NewMeetup = () => {
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
