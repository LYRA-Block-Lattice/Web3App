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
    <div className="dealersection">
      <div className="chat-message-receive1">
        <div className="user-name-group">
          <div className="user-name1">{title}</div>
          <div className="lorem-ipsum-dolor1">{content}</div>
          <div className="div9">{time}</div>
        </div>
        <img className="tip-icon1" alt="" src="../asserts/tip.svg" />
      </div>
    </div>
  );
};

export default DealerMessage;
