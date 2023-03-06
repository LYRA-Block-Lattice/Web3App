import { FunctionComponent } from "react";
import "./PeerMessage.css";

type PeerMessageType = {
  userName?: string;
  content?: string;
  time?: string;
};

const PeerMessage: FunctionComponent<PeerMessageType> = ({
  userName,
  content,
  time,
}) => {
  return (
    <div className="peersection">
      <div className="chat-message-receive1">
        <div className="user-name-parent">
          <div className="user-name">{userName}</div>
          <div className="lorem-ipsum-dolor">{content}</div>
          <div className="div8">{time}</div>
        </div>
        <img className="tip-icon1" alt="" src="../asserts/tip.svg" />
      </div>
    </div>
  );
};

export default PeerMessage;
