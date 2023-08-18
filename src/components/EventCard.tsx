//import { ReactNode } from "react";
import "../App.css";

interface EventCardProps {
  Headertext: string;
  children: string;
  src: string;
}

const EventCard = ({ Headertext, children, src }: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="event-header">{Headertext}</div>
      <div className="img-div">
        <img src={src}></img>
      </div>
      <div className="info-div">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default EventCard;
