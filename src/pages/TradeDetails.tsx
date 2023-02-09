import { FunctionComponent, useCallback } from "react";
import "./TradeDetails.css";

const TradeDetails: FunctionComponent = () => {
  const onPrepareSellOrderButtonClick = useCallback(() => {
    //TODO: Close the trade
  }, []);

  const onPrepareSellOrderButton1Click = useCallback(() => {
    //TODO: Create complaint for the trade
  }, []);

  const onPrepareSellOrderButton2Click = useCallback(() => {
    //TODO: Add comment to the trade
  }, []);

  return (
    <div className="tradedetails">
      <div className="the-dao-name">The DAO Name</div>
      <div className="tradedetails-child" />
      <div className="trade-id-parent">
        <div className="trade-id">Trade ID:</div>
        <a
          className="lawhkiuw8bhbmrdpdnd6"
          href="https://nebulatestnet.lyra.live/showblock/LAWhKiUW8BFurACRRRRDVbGBk4XkRuQixybk775G7xvqTGZNASRaYxeWr2We4KfDXUAGDJcZRK84CaimWkDChbMrDPdnD6"
          target="_blank"
        >
          LAWhKiUW8B...hbMrDPdnD6
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
