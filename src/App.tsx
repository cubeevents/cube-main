import EventCard from "./components/EventCard";
import EventPanel from "./components/EventPanel";

const App = () => {
  return (
    <EventPanel HeaderText="Techno VIT 2023 - 2024">
      <EventCard
        Headertext="React JS Workshop"
        src="https://wallpaperaccess.com/full/3909236.png"
      >
        A Fun React JS Workshop To Teach The Basics Of React
      </EventCard>

      <EventCard
        Headertext="GDSC Hackathon"
        src="https://th.bing.com/th/id/OIP.eKMKP9GREWU7v1dXl-BoJwHaKe?pid=ImgDet&rs=1"
      >
        A Machine Learning Based Hackathon
      </EventCard>

      <EventCard
        Headertext="Literary Contest"
        src="https://th.bing.com/th/id/R.2dfabaf1f2c23d96aa1ef6a923a51851?rik=7jx1LQgWN3Zsqw&riu=http%3a%2f%2fdesiwriterslounge.net%2fwp-content%2fuploads%2f2018%2f10%2fssc18postercomp-724x1024.png&ehk=qq8CcmDDruGfcQ6EuneXnOXkXJ8GBXjRFEhzI4lEVyE%3d&risl=&pid=ImgRaw&r=0"
      >
        A Creative Writing Contest
      </EventCard>

      <EventCard
        Headertext="Movie Quiz"
        src="https://templatelab.com/wp-content/uploads/2019/06/movie-poster-template-03.jpg?w=395"
      >
        A Fun Movie Quiz With Exciting Prizes
      </EventCard>
    </EventPanel>
  );
};

export default App;
