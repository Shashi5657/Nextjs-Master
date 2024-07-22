import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { addMeetupHandler } from "../libs/util";

const NewMeetup = async () => {
  const onAddMeetup = async (meetupData) => {
    "use server";
    try {
      const result = await addMeetupHandler(meetupData);
      console.log(result);
      // Handle successful submission (e.g., show a success message or redirect)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetup;
