import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import ChatTitleAction from "../components/ChatTitleAction";
import ChatMessage from "../components/ChatMessage";
import ChatSentMessage from "../components/ChatSentMessage";
import "./ChatPage.css";

const ChatPage: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="chatpage">
      <TopNavigationBar
        title="Chat"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <ChatTitleAction pinnedMessage="Await Buyer to pay" />
      <div className="direct-chat">
        <div className="peersection">
          <div className="chat-message-receive">
            <ChatMessage message="Lorem ipsum dolor" time="18:24" />
            <img className="tip-icon" alt="" src="../asserts/tip.svg" />
          </div>
        </div>
        <div className="dealersection">
          <div className="peersection">
            <ChatMessage
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. "
              time="18:24"
              msgBgColor="#dbf7af"
              frame10BorderRadius="var(--br-4xs) var(--br-sm) var(--br-sm) 0px"
            />
            <img className="tip-icon1" alt="" src="../asserts/tip.svg" />
          </div>
        </div>
        <div className="chat-datetag">
          <div className="today">Today</div>
        </div>
        <div className="usersection">
          <div className="chat-message-send">
            <ChatSentMessage
              message="Lorem ipsum dolor"
              time="18:24"
              iconRead="../asserts/iconlylightchat-message-read.svg"
            />
            <img className="tip-icon" alt="" src="../asserts/tip2.svg" />
          </div>
        </div>
        <div className="usersection">
          <div className="chat-message-send1">
            <ChatSentMessage
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. "
              time="18:24"
              iconRead="../asserts/iconlylightchat-message-read.svg"
              frame11BorderRadius="var(--br-sm) var(--br-4xs) 0px var(--br-sm)"
            />
            <img className="tip-icon3" alt="" src="../asserts/tip2.svg" />
          </div>
        </div>
      </div>
      <div className="peersection">
        <div className="peersection">
          <div className="frame-wrapper">
            <div className="frame-parent">
              <button className="iconlylightpaperclip-wrapper">
                <img
                  className="iconlylightpaperclip"
                  alt=""
                  src="../asserts/iconlylightpaperclip.svg"
                />
              </button>
              <input className="frame-child" type="text" />
              <button className="frame-container">
                <img
                  className="frame-item"
                  alt=""
                  src="../asserts/frame-8344.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
    </div>
  );
};

export default ChatPage;
