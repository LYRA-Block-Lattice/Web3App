import { FunctionComponent } from "react";
import { BlockchainAPI } from "../app/blockchain";
import { shorten } from "../app/utils";
import UtilityButton from "../components/UtilityButton";
import "./ChatTitleAction.css";

type ChatTitleActionType = {
  pinnedMessage?: string;
  tradeId: string;
};

const ChatTitleAction: FunctionComponent<ChatTitleActionType> = ({
  pinnedMessage,
  tradeId
}) => {
  return (
    <div className="chattitleaction">
      <a className="tradeidsection" href="https://some.link">
        Trade ID:{" "}
        <a href={BlockchainAPI.getBlockExplorerUrl(tradeId)}>
          {shorten(tradeId)}
        </a>
      </a>
      <b className="await-buyer-to">{pinnedMessage}</b>
      <div className="actionsection">
        <div className="pinnedmessage">
          <div className="div7">$ 30,000</div>
        </div>
        <UtilityButton>I've paid</UtilityButton>
      </div>
    </div>
  );
};

export default ChatTitleAction;
