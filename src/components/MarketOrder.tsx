import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CSS, { Property } from "csstype";
import "./MarketOrder.css";
import TableComponent, {
  TableComponentProps
} from "../components/TableComponent";
import { OrderStatus } from "../app/market/marketReducer";

type MarketOrderType = {
  orderId: string;
  offeringIcon?: string;
  bidingIcon?: string;
  orderStatus?: OrderStatus;
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
  lastUpdated?: string;
  time?: any;

  /** Style props */
  orderStatusBackgroundColor?: Property.BackgroundColor;
};

const MarketOrder: FunctionComponent<MarketOrderType> = ({
  orderId,
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
  time,
  orderStatusBackgroundColor
}) => {
  const [trades, setTrades] = useState<any[]>([]);
  const [showTradeTable, setShowTradeTable] = useState(false);

  const toggle = useCallback(() => {
    setShowTradeTable(!showTradeTable);
  }, [showTradeTable]);

  const orderStatusStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: orderStatusBackgroundColor
    };
  }, [orderStatusBackgroundColor]);

  return (
    <div className="ordercard">
      <div className="order-brief-section">
        <button className="banner-image" onClick={toggle}>
          <div className="order-banner">
            <div className="order-image">
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={offeringIcon}
              />
              <img
                className="order-image-child"
                alt=""
                src="../asserts/arrow-1.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={bidingIcon}
              />
            </div>
            <div className="order-status" style={orderStatusStyle}>
              <b className="open">
                {OrderStatus[orderStatus ?? OrderStatus.Closed]}
              </b>
            </div>
          </div>
        </button>
        <Link
          className="title-section"
          to={`/assertdetailview?orderId=${orderId}`}
        >
          <div className="sell-parent">
            <b className="btc">Sell</b>
            <b className="btc">{offering}</b>
            <img className="arrow-icon" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt1">{biding}</b>
          </div>
          <div>{time.DateTime}</div>
          <div className="details-section">
            <div className="block3">
              <div className="btc">Amount</div>
              <div className="btc">Limit Min</div>
              <div className="btc">Limit Max</div>
            </div>
            <div className="block4">
              <div className="btc">{amount}</div>
              <div className="btc">{limitMin}</div>
              <div className="btc">{limitMax}</div>
            </div>
            <div className="block1">
              <div className="price3">Price</div>
            </div>
            <div className="block2">
              <b className="btc">{price}</b>
            </div>
            <div className="details-section-child" />
          </div>
        </Link>
      </div>
      <div className="trades-section">
        <div className="width-controller" />
      </div>
      <div className="userprofilesection">
        <img
          className="userprofilesection-child"
          alt=""
          src="../asserts/ellipse-1@2x.png"
        />
        <div className="a-big-seller-parent">
          <b className="btc">{sellerName}</b>
          <div className="the-first-dao">{daoName}</div>
        </div>
        <div className="parent5">
          <b className="btc">{sellerRatings}</b>
          <div className="the-first-dao">{sellerTrades}</div>
        </div>
      </div>
      <div>
        <div>
          {showTradeTable ? (
            <TableComponent key={orderId} data={trades} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
