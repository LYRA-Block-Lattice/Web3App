import { FunctionComponent } from "react";
import "./TradeCard.css";

type TradeCardType = {
  /** Action props */
  onBannerImage1Click?: () => void;
};

const TradeCard: FunctionComponent<TradeCardType> = ({
  onBannerImage1Click,
}) => {
  return (
    <div className="ordercard1">
      <div className="order-brief-section1">
        <button className="banner-image1" onClick={onBannerImage1Click}>
          <div className="order-banner1">
            <div className="order-image1">
              <img
                className="icbaseline-generating-tokens-icon1"
                alt=""
                src="../asserts/icbaselinegeneratingtokens3.svg"
              />
              <img
                className="order-image-item"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon1"
                alt=""
                src="../asserts/carbonuserservicedesk2.svg"
              />
            </div>
            <div className="order-status1">
              <b className="open1">Open</b>
            </div>
          </div>
        </button>
        <a className="title-section1">
          <div className="trade-parent">
            <b className="trade">Trade</b>
            <b className="trade">BTC</b>
            <img className="frame-child5" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt3">tether/USDT</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
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
      <div className="trades-section1">
        <div className="width-controller1" />
      </div>
      <div className="itemactions1">
        <button className="delist-button1">
          <div className="mini-button2">Cancel</div>
        </button>
        <button className="delist-button1">
          <div className="mini-button2">Close</div>
        </button>
        <button className="delist-button1">
          <div className="mini-button2">Complain</div>
        </button>
        <button className="delist-button1">
          <div className="mini-button2">Comment</div>
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
