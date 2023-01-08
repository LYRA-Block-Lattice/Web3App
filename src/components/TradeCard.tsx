import { FunctionComponent } from "react";
import "./TradeCard.css";

type TradeCardType = {
  tradeStatus?: string;
  biding?: string;
  offering?: string;
  time?: string;
  price?: string;
  amount?: string;
  bidingImg?: string;
  offeringImg?: string;
};

const TradeCard: FunctionComponent<TradeCardType> = ({
  tradeStatus,
  biding,
  offering,
  time,
  price,
  amount,
  bidingImg,
  offeringImg,
}) => {
  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <button className="banner-image3">
          <div className="order-banner3">
            <button className="order-image3">
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src={bidingImg}
              />
              <img
                className="order-image-child1"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src={offeringImg}
              />
            </button>
            <div className="order-status3">
              <b className="open3">{tradeStatus}</b>
            </div>
          </div>
        </button>
        <div className="title-section3">
          <div className="trade-parent">
            <b className="trade">Trade</b>
            <b className="trade">{biding}</b>
            <img
              className="frame-child1"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt4">{offering}</b>
          </div>
          <div className="title-section-child" />
          <div className="am-wrapper">
            <div className="trade">{time}</div>
          </div>
          <div className="details-section3">
            <div className="block13">
              <div className="trade">Price</div>
            </div>
            <div className="block23">
              <div className="trade">{price}</div>
            </div>
            <div className="details-section-child1" />
            <div className="block33">
              <div className="trade">Amount</div>
            </div>
            <div className="block23">
              <div className="trade">{amount}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
    </div>
  );
};

export default TradeCard;
