import { FunctionComponent } from "react";
import "./OrderCard.css";

type OrderCardType = {
  /** Action props */
  onBannerImageClick?: () => void;
};

const OrderCard: FunctionComponent<OrderCardType> = ({
  onBannerImageClick,
}) => {
  return (
    <div className="ordercard">
      <div className="order-brief-section">
        <button className="banner-image" onClick={onBannerImageClick}>
          <div className="order-banner">
            <div className="order-image">
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src="../asserts/icbaselinegeneratingtokens2.svg"
              />
              <img
                className="order-image-child"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src="../asserts/carbonuserservicedesk2.svg"
              />
            </div>
            <div className="order-status">
              <b className="open">Open</b>
            </div>
          </div>
        </button>
        <a className="title-section">
          <div className="sell-parent">
            <b className="sell">Sell</b>
            <b className="sell">BTC</b>
            <img className="arrow-icon" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt2">tether/USDT</b>
          </div>
          <div className="title-section-child" />
          <div className="am-wrapper">
            <div className="sell">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section">
            <div className="block1">
              <div className="sell">Price</div>
              <div className="sell">Limit Min</div>
              <div className="sell">Sold</div>
            </div>
            <div className="block2">
              <div className="sell">10,323</div>
              <div className="sell">3.2</div>
              <div className="sell">123</div>
            </div>
            <div className="details-section-child" />
            <div className="block3">
              <div className="sell">Amount</div>
              <div className="sell">Limit Max</div>
              <div className="sell">Shelf</div>
            </div>
            <div className="block2">
              <div className="sell">1113.2</div>
              <div className="sell">3.2</div>
              <div className="sell">123</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section">
        <div className="width-controller" />
      </div>
      <div className="itemactions">
        <button className="delist-button">
          <div className="mini-button">Delist</div>
        </button>
        <button className="delist-button">
          <div className="mini-button">Close</div>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
