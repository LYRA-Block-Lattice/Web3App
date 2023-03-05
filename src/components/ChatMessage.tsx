import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ChatMessage.css";

type ChatMessageType = {
  message?: string;
  time?: string;

  /** Style props */
  msgBgColor?: Property.BackgroundColor;
  frame10BorderRadius?: Property.BorderRadius;
};

const ChatMessage: FunctionComponent<ChatMessageType> = ({
  message,
  time,
  msgBgColor,
  frame10BorderRadius,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: msgBgColor,
      borderRadius: frame10BorderRadius,
    };
  }, [msgBgColor, frame10BorderRadius]);

  return (
    <div className="user-name-parent" style={frameDivStyle}>
      <div className="user-name">User Name</div>
      <div className="lorem-ipsum-dolor">{message}</div>
      <div className="div8">{time}</div>
    </div>
  );
};

export default ChatMessage;
