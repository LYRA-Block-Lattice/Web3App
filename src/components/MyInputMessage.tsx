import { FunctionComponent } from "react";
import "./MyInputMessage.css";

type MyInputMessageType = {
  content?: string;
};

const MyInputMessage: FunctionComponent<MyInputMessageType> = ({ content }) => {
  return (
    <div className="usersection">
      <div className="chat-message-send">
        <div className="lorem-ipsum-dolor-sit-amet-co-parent">
          <div className="lorem-ipsum-dolor2">{content}</div>
          <div className="parent">
            <div className="div10">18:24</div>
            <img
              className="iconlylightchat-message-read"
              alt=""
              src="../asserts/iconlylightchat-message-read.svg"
            />
          </div>
        </div>
        <img className="tip-icon2" alt="" src="../asserts/tip2.svg" />
      </div>
    </div>
  );
};

export default MyInputMessage;
