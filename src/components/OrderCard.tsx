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
    <div className="ordercard2">
      <div className="order-brief-section2">
        <button className="banner-image2" onClick={onBannerImageClick}>
          <div className="order-banner2">
            <div className="order-image2">
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src="../asserts/icbaselinegeneratingtokens4.svg"
              />
              <img
                className="order-image-inner"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src="../asserts/carbonuserservicedesk4.svg"
              />
            </div>
            <div className="order-status2">
              <b className="open2">Open</b>
            </div>
          </div>
        </button>
        <a className="title-section2">
          <div className="sell-group">
            <b className="sold">Sell</b>
            <b className="sold">BTC</b>
            <img
              className="frame-child4"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt4">tether/USDT</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
            <div className="sold">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section2">
            <div className="block12">
              <div className="sold">Price</div>
              <div className="sold">Limit Min</div>
              <div className="sold">Sold</div>
            </div>
            <div className="block22">
              <div className="sold">10,323</div>
              <div className="sold">3.2</div>
              <div className="sold">123</div>
            </div>
            <div className="details-section-inner" />
            <div className="block32">
              <div className="sold">Amount</div>
              <div className="sold">Limit Max</div>
              <div className="sold">Shelf</div>
            </div>
            <div className="block22">
              <div className="sold">1113.2</div>
              <div className="sold">3.2</div>
              <div className="sold">123</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section2">
        <div className="width-controller2" />
      </div>
      <div className="itemactions1">
        <button className="delist-button1">
          <div className="mini-button6">Delist</div>
        </button>
        <button className="delist-button1">
          <div className="mini-button6">Close</div>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
