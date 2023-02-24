import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { BlockchainAPI } from "../app/blockchain/blockchain-api";
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
  dir: string;
  tradeId: string;
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
  dir,
  tradeId
}) => {
  const navigate = useNavigate();
  const orderRef = useRef<HTMLDivElement>(null);

  const onBannerImageClick = useCallback(() => {
    navigate("/tradedetails?tradeId=" + tradeId);
  }, [navigate]);

  useEffect(() => {
    if (orderRef.current) {
      if (dir === "Sell") {
        orderRef.current.style.backgroundColor = "var(--sell1)";
      } else {
        orderRef.current.style.backgroundColor = "var(--buy1)";
      }
    }
  }, []);

  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <button className="banner-image3" onClick={onBannerImageClick}>
          <div className="order-banner3">
            <div className="order-image3">
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={bidingImg}
              />
              <img
                className="order-image-child1"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={offeringImg}
              />
            </div>
            <div className="order-status3">
              <b className="open3">{tradeStatus}</b>
            </div>
          </div>
        </button>
        <a className="title-section3">
          <div className="trade-group">
            <b className="trade1">{dir}</b>
            <b className="trade1">{biding}</b>
            <img
              className="frame-child5"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt5">{offering}</b>
          </div>
          <div className="title-section-inner" />
          <div className="am-frame">
            <div className="trade1">{time}</div>
          </div>
          <div className="details-section3">
            <div className="block13">
              <div className="trade1">Price</div>
            </div>
            <div className="block23">
              <div className="trade1">{price}</div>
            </div>
            <div className="details-section-child1" />
            <div className="block33">
              <div className="trade1">Amount</div>
            </div>
            <div className="block23">
              <div className="trade1">{amount}</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
      <div className="itemactions2">
        {tradeStatus != "Closed" && (
          <div>
            <button className="delist-button">
              <div className="mini-button2">Cancel</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Close</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Complain</div>
            </button>
          </div>
        )}
        {tradeStatus === "Closed" && (
          <button className="delist-button">
            <div className="mini-button2">Comment</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default TradeCard;
