import { FunctionComponent, useCallback, useEffect, useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import ChatTitleAction from "../components/ChatTitleAction";
import PeerMessage from "../components/PeerMessage";
import DealerMessage from "../components/DealerMessage";
import TimeTag from "../components/TimeTag";
import MyInputMessage from "../components/MyInputMessage";
import "./ChatPage.css";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { shorten } from "../app/utils";
import { useDispatch, useSelector } from "react-redux";
import { DEALER_JOIN_ROOM, DEALER_SEND_MESSAGE } from "../app/actionTypes";
import { getAuthSelector } from "../app/selectors";

const ChatPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);

  const [input, setInput] = useState("");

  // get query string args
  const [searchParams, setSearchParams] = useSearchParams({});

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  useEffect(() => {
    // join chat room

    dispatch({
      type: DEALER_JOIN_ROOM,
      payload: {
        accountId: auth.accountId,
        tradeId: searchParams.get("tradeId")!
        //signature:
      }
    });
  }, []);

  const onSendClick = useCallback(() => {
    dispatch({
      type: DEALER_SEND_MESSAGE,
      payload: {
        accountId: auth.accountId,
        tradeId: searchParams.get("tradeId")!,
        message: input
      }
    });
  }, []);

  return (
    <div className="chatpage main-content">
      <TopNavigationBar
        title="Chat"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <ChatTitleAction
        tradeId={searchParams.get("tradeId")!}
        pinnedMessage="Await Buyer to pay"
      />
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
          <button className="iconlylightpaperclip-wrapper" title="attach">
            <img
              className="iconlylightpaperclip"
              alt=""
              src="../asserts/iconlylightpaperclip.svg"
            />
          </button>
          <input
            className="frame-child"
            type="text"
            title="type your message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="frame-wrapper" title="Send" onClick={onSendClick}>
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
