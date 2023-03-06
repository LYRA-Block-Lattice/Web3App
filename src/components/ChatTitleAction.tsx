import { FunctionComponent } from "react";
import { BlockchainAPI } from "../app/blockchain";
import { PinnedMessage, PinnedMode } from "../app/blockchain/blocks/dealerMsgs";
import { shorten } from "../app/utils";
import UtilityButton from "../components/UtilityButton";
import "./ChatTitleAction.css";

type ChatTitleActionType = {
  pinnedMessage?: PinnedMessage;
  tradeId: string;
};

const ChatTitleAction: FunctionComponent<ChatTitleActionType> = ({
  pinnedMessage,
  tradeId
}) => {
  return (
    <div className="chattitleaction">
      <a
        className="tradeidsection"
        href={BlockchainAPI.getBlockExplorerUrl(tradeId)}
      >
        Trade ID: {shorten(tradeId)}
      </a>
      <b className="await-buyer-to">{pinnedMessage?.text}</b>
      <div className="actionsection">
        {pinnedMessage?.mode === PinnedMode.Action && (
          <>
            <div className="pinnedmessage">
              <div className="div7">$ 30,000</div>
            </div>
            <UtilityButton>I've paid</UtilityButton>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatTitleAction;
