import { FunctionComponent, useCallback } from "react";
import "./TradeCard.css";

const TradeCard: FunctionComponent = () => {
  const onBannerImage1Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <button className="banner-image3" onClick={onBannerImage1Click}>
          <div className="order-banner3">
            <div className="order-image3">
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src="../asserts/icbaselinegeneratingtokens4.svg"
              />
              <img
                className="order-image-child1"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src="../asserts/carbonuserservicedesk4.svg"
              />
            </div>
            <div className="order-status3">
              <b className="open3">Open</b>
            </div>
          </div>
        </button>
        <a className="title-section3">
          <div className="trade-group">
            <b className="trade1">Trade</b>
            <b className="trade1">BTC</b>
            <img
              className="frame-child5"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt5">tether/USDT</b>
          </div>
          <div className="title-section-inner" />
          <div className="am-frame">
            <div className="trade1">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section3">
            <div className="block13">
              <div className="trade1">Price</div>
            </div>
            <div className="block23">
              <div className="trade1">10,323</div>
            </div>
            <div className="details-section-child1" />
            <div className="block33">
              <div className="trade1">Amount</div>
            </div>
            <div className="block23">
              <div className="trade1">1113.2</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
      <div className="itemactions2">
        <button className="delist-button2">
          <div className="mini-button8">Cancel</div>
        </button>
        <button className="delist-button2">
          <div className="mini-button8">Close</div>
        </button>
        <button className="delist-button2">
          <div className="mini-button8">Complain</div>
        </button>
        <button className="delist-button2">
          <div className="mini-button8">Comment</div>
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
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
            <img className="frame-child3" alt="" src="../asserts/arrow-2.svg" />
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
