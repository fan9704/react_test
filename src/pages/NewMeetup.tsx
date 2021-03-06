// React Router
// import { useHistory } from "react-router-dom";

// Components
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // const history = useHistory();

  function addMeetupHandler(meetupData:any) {
    fetch(
      "https://react-meetup-example-7f0c9-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;