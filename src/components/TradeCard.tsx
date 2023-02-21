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
    <div className="ordercard1">
      <div className="order-brief-section1">
        <button className="banner-image1" onClick={onBannerImageClick}>
          <div className="order-banner1">
            <div className="order-image1" ref={orderRef}>
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={bidingImg}
              />
              <img
                className="order-image-child"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={offeringImg}
              />
            </div>
            <div className="order-status1">
              <b className="open1">{tradeStatus}</b>
            </div>
          </div>
        </button>
        <a className="title-section1" onClick={onBannerImageClick}>
          <div className="trade-parent">
            <b className="trade">{dir}</b>
            <b className="trade">{biding}</b>
            <img
              className="frame-child3"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt3">{offering}</b>
          </div>
          <div className="title-section-child" />
          <div className="am-wrapper">
            <div className="trade">{time}</div>
          </div>
          <div className="details-section">
            <div className="block1">
              <div className="trade">Price</div>
            </div>
            <div className="block2">
              <div className="trade">{price}</div>
            </div>
            <div className="details-section-child" />
            <div className="block3">
              <div className="trade">Amount</div>
            </div>
            <div className="block2">
              <div className="trade">{amount}</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section">
        <div className="width-controller" />
      </div>
      <div className="itemactions">
        {tradeStatus != "Closed" && (
          <div>
            <button className="delist-button">
              <div className="mini-button">Cancel</div>
            </button>
            <button className="delist-button">
              <div className="mini-button">Close</div>
            </button>
            <button className="delist-button">
              <div className="mini-button">Complain</div>
            </button>
          </div>
        )}
        {tradeStatus === "Closed" && (
          <button className="delist-button">
            <div className="mini-button">Comment</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default TradeCard;
