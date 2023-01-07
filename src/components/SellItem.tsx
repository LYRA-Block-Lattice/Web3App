import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./SellItem.css";

type SellItemType = {
  sellerName?: string;
  offering?: string;
  biding?: string;
  sellerRating?: string;
  lastUpdated?: string;
  orderStatus?: OrderStatus;
  price?: string;
  amount?: string;
  limitMin?: string;
  limitMax?: string;
  daoName?: string;
  tradeCount?: string;
  iconSell?: string;
  iconToGet?: string;
};

enum OrderStatus {
  Open = 0,
  Partial = 10,
  Closed = 30,
  Delist = 50
}

const SellItem: FunctionComponent<SellItemType> = ({
  sellerName,
  offering,
  biding,
  sellerRating,
  lastUpdated,
  orderStatus,
  price,
  amount,
  limitMin,
  limitMax,
  daoName,
  tradeCount,
  iconSell,
  iconToGet
}) => {
  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <button className="banner-image3">
          <div className="order-banner3">
            <div className="order-image3">
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={iconSell}
              />
              <img
                className="arrow-icon"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={iconToGet}
              />
            </div>
            <div className="order-status3">
              <b className="open3">
                {OrderStatus[orderStatus ?? OrderStatus.Closed]}
              </b>
            </div>
          </div>
        </button>
        <Link className="title-section3" to="/assertdetailview">
          <div className="sell-container">
            <b className="sell3">Sell</b>
            <b className="sell3">{offering}</b>
            <img
              className="frame-child1"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt4">{biding}</b>
          </div>
          <div className="details-section3">
            <div className="block33">
              <div className="sell3">Amount</div>
              <div className="sell3">Limit Min</div>
              <div className="sell3">Limit Max</div>
            </div>
            <div className="block43">
              <div className="sell3">{amount}</div>
              <div className="sell3">{limitMin}</div>
              <div className="sell3">{limitMax}</div>
            </div>
            <div className="block13">
              <div className="price3">Price</div>
            </div>
            <div className="block23">
              <b className="sell3">{price}</b>
            </div>
            <div className="frame-div" />
          </div>
        </Link>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
      <div className="userprofilesection1">
        <img
          className="userprofilesection-item"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-group">
          <b className="sell3">{sellerName}</b>
          <div className="the-first-dao1">{daoName}</div>
        </div>
        <div className="parent5">
          <b className="sell3">{sellerRating}</b>
          <div className="the-first-dao1">{tradeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
