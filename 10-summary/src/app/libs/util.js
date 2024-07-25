"use server";

export const addMeetupHandler = async (meetupData) => {
  const response = await fetch("/api/new-meetup", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data;
};
