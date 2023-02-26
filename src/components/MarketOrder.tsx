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
    <div className="ordercard4">
      <div className="order-brief-section4">
        <button className="banner-image4" onClick={onBannerImage4Click}>
          <div className="order-banner4">
            <div className="order-image4">
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src="../asserts/icbaselinegeneratingtokens4.svg"
              />
              <img
                className="order-image-inner"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src="../asserts/carbonuserservicedesk4.svg"
              />
            </div>
            <div className="order-status4">
              <b className="open2">Open</b>
            </div>
          </div>
        </button>
        <Link className="title-section4" to="/assertdetailview">
          <div className="sell-group">
            <b className="a-big-seller">Sell</b>
            <b className="a-big-seller">BTC</b>
            <img className="frame-child4" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt5">tether/USDT</b>
          </div>
          <div className="details-section4">
            <div className="block32">
              <div className="a-big-seller">Amount</div>
              <div className="a-big-seller">Limit Min</div>
              <div className="a-big-seller">Limit Max</div>
            </div>
            <div className="block42">
              <div className="a-big-seller">1113.2</div>
              <div className="a-big-seller">1.2</div>
              <div className="a-big-seller">3.2</div>
            </div>
            <div className="block14">
              <div className="price3">Price</div>
            </div>
            <div className="block24">
              <b className="a-big-seller">10,323</b>
            </div>
            <div className="details-section-child2" />
          </div>
        </Link>
      </div>
      <div className="trades-section4">
        <div className="width-controller4" />
      </div>
      <div className="userprofilesection">
        <img
          className="userprofilesection-child"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-parent">
          <b className="a-big-seller">A big seller</b>
          <div className="the-first-dao">The First DAO</div>
        </div>
        <div className="parent">
          <b className="a-big-seller">98%</b>
          <div className="the-first-dao">1024 Trades</div>
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
