import { FunctionComponent } from "react";
import "./DealerMessage.css";

type DealerMessageType = {
  title?: string;
  content?: string;
  time?: string;
};

const DealerMessage: FunctionComponent<DealerMessageType> = ({
  title,
  content,
  time,
}) => {
  return (
    <div className="user-name-group">
      <div className="user-name1">{title}</div>
      <div className="lorem-ipsum-dolor1">{content}</div>
      <div className="div9">{time}</div>
    </div>
  );
};

export default DealerMessage;
