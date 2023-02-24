import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./MarketOrder.css";

type MarketOrderType = {
  /** Action props */
  onBannerImage4Click?: () => void;
};

const MarketOrder: FunctionComponent<MarketOrderType> = ({
  onBannerImage4Click,
}) => {
  return (
    <div className="ordercard6">
      <div className="order-brief-section6">
        <button className="banner-image6" onClick={onBannerImage4Click}>
          <div className="order-banner6">
            <div className="order-image6">
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src="../asserts/icbaselinegeneratingtokens6.svg"
              />
              <img
                className="order-image-child2"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src="../asserts/carbonuserservicedesk6.svg"
              />
            </div>
            <div className="order-status6">
              <b className="open4">Open</b>
            </div>
          </div>
        </button>
        <Link className="title-section6" to="/assertdetailview">
          <div className="sell-container">
            <b className="sell2">Sell</b>
            <b className="sell2">BTC</b>
            <img
              className="frame-child6"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt7">tether/USDT</b>
          </div>
          <div className="details-section6">
            <div className="block34">
              <div className="sell2">Amount</div>
              <div className="sell2">Limit Min</div>
              <div className="sell2">Limit Max</div>
            </div>
            <div className="block44">
              <div className="sell2">1113.2</div>
              <div className="sell2">1.2</div>
              <div className="sell2">3.2</div>
            </div>
            <div className="block16">
              <div className="price5">Price</div>
            </div>
            <div className="block26">
              <b className="sell2">10,323</b>
            </div>
            <div className="details-section-child4" />
          </div>
        </Link>
      </div>
      <div className="trades-section6">
        <div className="width-controller6" />
      </div>
      <div className="userprofilesection1">
        <img
          className="userprofilesection-item"
          alt=""
          src="../asserts/ellipse-12@2x.png"
        />
        <div className="a-big-seller-group">
          <b className="sell2">A big seller</b>
          <div className="the-first-dao1">The First DAO</div>
        </div>
        <div className="container">
          <b className="sell2">98%</b>
          <div className="the-first-dao1">1024 Trades</div>
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
