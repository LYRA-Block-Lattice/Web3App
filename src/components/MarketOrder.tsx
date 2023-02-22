import { FunctionComponent, useCallback } from "react";
import { Link } from "react-router-dom";
import "./MarketOrder.css";

type MarketOrderType = {
  offeringIcon?: string;
  bidingIcon?: string;
  orderStatus?: string;
  offering?: string;
  biding?: string;
  amount?: string;
  limitMin?: string;
  limitMax?: string;
  price?: string;
  sellerName?: string;
  daoName?: string;
  sellerRatings?: string;
  sellerTrades?: string;
};

const MarketOrder: FunctionComponent<MarketOrderType> = ({
  offeringIcon,
  bidingIcon,
  orderStatus,
  offering,
  biding,
  amount,
  limitMin,
  limitMax,
  price,
  sellerName,
  daoName,
  sellerRatings,
  sellerTrades,
}) => {
  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
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
                src={offeringIcon}
              />
              <img
                className="order-image-item"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon1"
                alt=""
                src={bidingIcon}
              />
            </div>
            <div className="order-status1">
              <b className="open1">{orderStatus}</b>
            </div>
          </div>
        </button>
        <Link className="title-section1" to="/assertdetailview">
          <div className="sell-parent">
            <b className="sell">Sell</b>
            <b className="sell">{offering}</b>
            <img className="arrow-icon" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt3">{biding}</b>
          </div>
          <div className="details-section1">
            <div className="block31">
              <div className="sell">Amount</div>
              <div className="sell">Limit Min</div>
              <div className="sell">Limit Max</div>
            </div>
            <div className="block41">
              <div className="sell">{amount}</div>
              <div className="sell">{limitMin}</div>
              <div className="sell">{limitMax}</div>
            </div>
            <div className="block11">
              <div className="price4">Price</div>
            </div>
            <div className="block21">
              <b className="sell">{price}</b>
            </div>
            <div className="details-section-item" />
          </div>
        </Link>
      </div>
      <div className="trades-section1">
        <div className="width-controller1" />
      </div>
      <div className="userprofilesection">
        <img
          className="userprofilesection-child"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-parent">
          <b className="sell">{sellerName}</b>
          <div className="the-first-dao">{daoName}</div>
        </div>
        <div className="parent">
          <b className="sell">{sellerRatings}</b>
          <div className="the-first-dao">{sellerTrades}</div>
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
