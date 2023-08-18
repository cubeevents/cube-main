import { ReactNode } from "react";

interface EventPanelProps {
  children: ReactNode;
  HeaderText: string;
}

const EventPanel = ({ children, HeaderText }: EventPanelProps) => {
  return (
    <div className="event-panel">
      <div className="panel-header">{HeaderText}</div>
      <div className="panel-content">{children}</div>
    </div>
  );
};

export default EventPanel;
