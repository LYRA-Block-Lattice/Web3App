import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ChatSentMessage.css";

type ChatSentMessageType = {
  message?: string;
  time?: string;
  iconRead?: string;

  /** Style props */
  frame11BorderRadius?: Property.BorderRadius;
};

const ChatSentMessage: FunctionComponent<ChatSentMessageType> = ({
  message,
  time,
  iconRead,
  frame11BorderRadius,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      borderRadius: frame11BorderRadius,
    };
  }, [frame11BorderRadius]);

  return (
    <div
      className="lorem-ipsum-dolor-sit-amet-co-parent"
      style={frameDiv1Style}
    >
      <div className="lorem-ipsum-dolor1">{message}</div>
      <div className="parent">
        <div className="div9">{time}</div>
        <img className="iconlylightchat-message-read" alt="" src={iconRead} />
      </div>
    </div>
  );
};

export default ChatSentMessage;
