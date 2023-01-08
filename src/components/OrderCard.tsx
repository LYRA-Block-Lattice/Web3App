import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./OrderCard.css";

type OrderCardType = {
  offering?: string;
  biding?: string;
  orderStatus?: string;
  offeringImg?: string;
  bidingImg?: string;
  time?: string;
  price?: string;
  amount?: string;
  limitMin?: string;
  limitMax?: string;
  sold?: string;
  shelf?: string;

  /** Style props */
  orderStatusBackgroundColor?: Property.BackgroundColor;
};

const OrderCard: FunctionComponent<OrderCardType> = ({
  offering,
  biding,
  orderStatus,
  offeringImg,
  bidingImg,
  time,
  price,
  amount,
  limitMin,
  limitMax,
  sold,
  shelf,
  orderStatusBackgroundColor,
}) => {
  const orderStatusStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: orderStatusBackgroundColor,
    };
  }, [orderStatusBackgroundColor]);

  return (
    <div className="ordercard4">
      <div className="order-brief-section4">
        <button className="banner-image4">
          <div className="order-banner4">
            <button className="order-image4">
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={offeringImg}
              />
              <img
                className="order-image-child2"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon4"
                alt=""
                src={bidingImg}
              />
            </button>
            <div className="order-status4" style={orderStatusStyle}>
              <b className="open4">{orderStatus}</b>
            </div>
          </div>
        </button>
        <div className="title-section4">
          <div className="sell-parent1">
            <b className="sold">Sell</b>
            <b className="sold">{offering}</b>
            <img
              className="frame-child2"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt5">{biding}</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
            <div className="sold">{time}</div>
          </div>
          <div className="details-section4">
            <div className="block14">
              <div className="sold">Price</div>
              <div className="sold">Limit Min</div>
              <div className="sold">Sold</div>
            </div>
            <div className="block24">
              <div className="sold">{price}</div>
              <div className="sold">{limitMin}</div>
              <div className="sold">{sold}</div>
            </div>
            <div className="details-section-child2" />
            <div className="block34">
              <div className="sold">Amount</div>
              <div className="sold">Limit Max</div>
              <div className="sold">Shelf</div>
            </div>
            <div className="block24">
              <div className="sold">{amount}</div>
              <div className="sold">{limitMax}</div>
              <div className="sold">{shelf}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trades-section4">
        <div className="width-controller4" />
      </div>
    </div>
  );
};

export default OrderCard;
