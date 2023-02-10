import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { blockExplorerUrlBase } from "../app/market/marketApi";
import "./TradeDetails.css";

const TradeDetails: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [link, setLink] = useState("");
  const [shortId, setShortId] = useState("");

  const onPrepareSellOrderButtonClick = useCallback(() => {
    //TODO: Close the trade
  }, []);

  const onPrepareSellOrderButton1Click = useCallback(() => {
    //TODO: Create complaint for the trade
  }, []);

  const onPrepareSellOrderButton2Click = useCallback(() => {
    //TODO: Add comment to the trade
  }, []);

  // load the trade details via market api on page load
  useEffect(() => {
    var tradeId = searchParams.get("tradeId");
    if (tradeId) {
      setLink(blockExplorerUrlBase() + tradeId);
      setShortId(tradeId.substring(0, 8) + "..." + tradeId.substring(80));
    }
  }, []);

  return (
    <div className="tradedetails">
      <div className="the-dao-name">The DAO Name</div>
      <div className="tradedetails-child" />
      <div className="trade-id-parent">
        <div className="trade-id">Trade ID:</div>
        <a className="lawhkiuw8bhbmrdpdnd6" href={link} target="_blank">
          {shortId}
        </a>
      </div>
      <div className="status-wrapper">
        <div className="trade-id">Status:</div>
      </div>
      <div className="trade-id-parent">
        <button
          className="prepare-sell-order-button"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="utility-button">Close</div>
        </button>
        <button
          className="prepare-sell-order-button"
          onClick={onPrepareSellOrderButton1Click}
        >
          <div className="utility-button">Complain</div>
        </button>
        <button
          className="prepare-sell-order-button"
          onClick={onPrepareSellOrderButton2Click}
        >
          <div className="utility-button">Comment</div>
        </button>
      </div>
    </div>
  );
};

export default TradeDetails;
