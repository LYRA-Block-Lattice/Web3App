import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import ChatTitleAction from "../components/ChatTitleAction";
import PeerMessage from "../components/PeerMessage";
import DealerMessage from "../components/DealerMessage";
import TimeTag from "../components/TimeTag";
import MyInputMessage from "../components/MyInputMessage";
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
        <PeerMessage
          userName="User Name"
          content="Lorem ipsum dolor"
          time="18:24"
        />
        <DealerMessage
          title="User Name"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. "
          time="18:24"
        />
        <TimeTag tag="Today" />
        <MyInputMessage content="Lorem ipsum dolor" />
        <MyInputMessage content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. " />
      </div>
      <div className="chat-input-message-field">
        <div className="frame-parent">
          <button className="iconlylightpaperclip-wrapper">
            <img
              className="iconlylightpaperclip"
              alt=""
              src="../asserts/iconlylightpaperclip.svg"
            />
          </button>
          <input className="frame-child" type="text" />
          <button className="frame-wrapper">
            <img
              className="frame-item"
              alt=""
              src="../asserts/frame-8344.svg"
            />
          </button>
        </div>
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
