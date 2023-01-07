import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./SellItem.css";

type SellItemType = {
  sellerName?: string;
  offering?: string;
  biding?: string;
  sellerRating?: string;
  lastUpdated?: string;
  orderStatus?: string;
  price?: string;
  amount?: string;
  limitMin?: string;
  limitMax?: string;
  daoName?: string;
  tradeCount?: string;
  iconSell?: string;
  iconToGet?: string;
};

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
  iconToGet,
}) => {
  return (
    <div className="ordercard2">
      <div className="order-brief-section2">
        <button className="banner-image2">
          <div className="order-banner2">
            <div className="order-image2">
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src={iconSell}
              />
              <img
                className="order-image-inner"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon3"
                alt=""
                src={iconToGet}
              />
            </div>
            <div className="order-status2">
              <b className="open2">{orderStatus}</b>
            </div>
          </div>
        </button>
        <Link className="title-section2" to="/assertdetailview">
          <div className="sell-group">
            <b className="b">Sell</b>
            <b className="b">{offering}</b>
            <img className="frame-inner" alt="" src="../asserts/arrow-22.svg" />
            <b className="tetherusdt3">{biding}</b>
          </div>
          <div className="details-section2">
            <div className="block32">
              <div className="b">Amount</div>
              <div className="b">Limit Min</div>
              <div className="b">Limit Max</div>
            </div>
            <div className="block42">
              <div className="b">{amount}</div>
              <div className="b">{limitMin}</div>
              <div className="b">{limitMax}</div>
            </div>
            <div className="block12">
              <div className="price2">Price</div>
            </div>
            <div className="block22">
              <b className="b">{price}</b>
            </div>
            <div className="details-section-inner" />
          </div>
        </Link>
      </div>
      <div className="trades-section2">
        <div className="width-controller2" />
      </div>
      <div className="userprofilesection">
        <img
          className="userprofilesection-child"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-parent">
          <b className="b">A big seller</b>
          <div className="the-first-dao">{daoName}</div>
        </div>
        <div className="frame-div">
          <b className="b">98%</b>
          <div className="the-first-dao">{tradeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
