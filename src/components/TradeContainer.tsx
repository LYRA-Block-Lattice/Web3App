import { FunctionComponent, useCallback } from "react";
import OpenContainer from "../components/OpenContainer";
import "./TradeContainer.css";

const TradeContainer: FunctionComponent = () => {
  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="ordercard2">
      <div className="order-brief-section2">
        <OpenContainer
          tokenImageUrl="../asserts/icbaselinegeneratingtokens2.svg"
          propBackgroundColor="#7ed321"
          onBannerImageClick={onBannerImageClick}
        />
        <a className="title-section1">
          <div className="trade-parent">
            <b className="trade">Trade</b>
            <b className="trade">BTC</b>
            <img className="frame-child3" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt3">tether/USDT</b>
          </div>
          <div className="title-section-child" />
          <div className="am-wrapper">
            <div className="trade">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section1">
            <div className="block11">
              <div className="trade">Price</div>
            </div>
            <div className="block21">
              <div className="trade">10,323</div>
            </div>
            <div className="details-section-item" />
            <div className="block31">
              <div className="trade">Amount</div>
            </div>
            <div className="block21">
              <div className="trade">1113.2</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section2">
        <div className="width-controller2" />
      </div>
      <div className="itemactions">
        <button className="delist-button">
          <div className="mini-button2">Cancel</div>
        </button>
        <button className="delist-button">
          <div className="mini-button2">Close</div>
        </button>
        <button className="delist-button">
          <div className="mini-button2">Complain</div>
        </button>
        <button className="delist-button">
          <div className="mini-button2">Comment</div>
        </button>
      </div>
    </div>
  );
};

export default TradeContainer;
