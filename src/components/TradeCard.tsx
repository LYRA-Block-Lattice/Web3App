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
            <div className="order-image1">
              <img
                className="icbaseline-generating-tokens-icon1"
                alt=""
                src={bidingImg}
              />
              <img
                className="order-image-item"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon1"
                alt=""
                src={offeringImg}
              />
            </div>
            <div className="order-status1">
              <b className="open1">{tradeStatus}</b>
            </div>
          </div>
        </button>
        <a className="title-section1">
          <div className="trade-parent">
            <b className="trade">{dir}</b>
            <b className="trade">{dir == "Buy" ? biding : offering}</b>
            <img className="frame-child3" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt3">{dir == "Buy" ? offering : biding}</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
            <div className="trade">{time}</div>
          </div>
          <div className="details-section1">
            <div className="block11">
              <div className="trade">Price</div>
            </div>
            <div className="block21">
              <div className="trade">{price}</div>
            </div>
            <div className="details-section-item" />
            <div className="block31">
              <div className="trade">Amount</div>
            </div>
            <div className="block21">
              <div className="trade">{amount}</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section1">
        <div className="width-controller1" />
      </div>
      <div className="itemactions1">
        {tradeStatus != "Closed" && (
          <>
            <button className="delist-button1">
              <div className="mini-button4">Cancel</div>
            </button>
            <button className="delist-button1">
              <div className="mini-button4">Close</div>
            </button>
            <button className="delist-button1">
              <div className="mini-button4">Complain</div>
            </button>
          </>
        )}
        {tradeStatus === "Closed" && (
          <button className="delist-button1">
            <div className="mini-button4">Comment</div>
          </button>
        )}
        <a
          href={BlockchainAPI.getBlockExplorerUrl(tradeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="no-decoration"
        >
          <button className="delist-button1">
            <div className="mini-button4">View Block</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default TradeCard;
