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
    <div className="ordercard5">
      <div className="order-brief-section5">
        <button className="banner-image5">
          <div className="order-banner5">
            <div className="order-image5">
              <img
                className="icbaseline-generating-tokens-icon6"
                alt=""
                src={iconSell}
              />
              <img
                className="order-image-child3"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon6"
                alt=""
                src={iconToGet}
              />
            </div>
            <div className="order-status5">
              <b className="open5">{orderStatus}</b>
            </div>
          </div>
        </button>
        <Link className="title-section5" to="/assertdetailview">
          <div className="sell-parent2">
            <b className="sell5">Sell</b>
            <b className="sell5">{offering}</b>
            <img className="frame-child3" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt6">{biding}</b>
          </div>
          <div className="details-section5">
            <div className="block35">
              <div className="sell5">Amount</div>
              <div className="sell5">Limit Min</div>
              <div className="sell5">Limit Max</div>
            </div>
            <div className="block45">
              <div className="sell5">{amount}</div>
              <div className="sell5">{limitMin}</div>
              <div className="sell5">{limitMax}</div>
            </div>
            <div className="block15">
              <div className="price5">Price</div>
            </div>
            <div className="block25">
              <b className="sell5">{price}</b>
            </div>
            <div className="details-section-child3" />
          </div>
        </Link>
      </div>
      <div className="trades-section5">
        <div className="width-controller5" />
      </div>
      <div className="userprofilesection3">
        <img
          className="userprofilesection-child1"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-parent1">
          <b className="sell5">A big seller</b>
          <div className="the-first-dao3">{daoName}</div>
        </div>
        <div className="parent7">
          <b className="sell5">98%</b>
          <div className="the-first-dao3">{tradeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
