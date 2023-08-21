import EventCard from "./components/EventCard";
import EventPanel from "./components/EventPanel";

import event1 from "/src/assets/event1.png";
import event2 from "/src/assets/event2.jpeg";
import event3 from "/src/assets/event3.png";
import event4 from "/src/assets/event4.jpg";

const App = () => {
  return (
    <EventPanel HeaderText="Techno VIT 2023 - 2024">
      <EventCard Headertext="React JS Workshop" src={event1}>
        A Fun React JS Workshop To Teach The Basics Of React
      </EventCard>

      <EventCard Headertext="GDSC Hackathon" src={event2}>
        A Machine Learning Based Hackathon
      </EventCard>

      <EventCard Headertext="Literary Contest" src={event3}>
        A Creative Writing Contest
      </EventCard>

      <EventCard Headertext="Movie Quiz" src={event4}>
        A Fun Movie Quiz With Exciting Prizes
      </EventCard>
    </EventPanel>
  );
};

export default App;
