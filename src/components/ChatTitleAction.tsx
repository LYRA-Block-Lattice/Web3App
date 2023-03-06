import { FunctionComponent } from "react";
import UtilityButton from "../components/UtilityButton";
import "./ChatTitleAction.css";

type ChatTitleActionType = {
  pinnedMessage?: string;
};

const ChatTitleAction: FunctionComponent<ChatTitleActionType> = ({
  pinnedMessage,
}) => {
  return (
    <div className="chattitleaction">
      <a className="tradeidsection" href="https://some.link">
        Trade ID: L38903234..adf
      </a>
      <b className="await-buyer-to">{pinnedMessage}</b>
      <div className="actionsection">
        <div className="pinnedmessage">
          <div className="div7">$ 30,000</div>
        </div>
        <UtilityButton />
      </div>
    </div>
  );
};

export default ChatTitleAction;
