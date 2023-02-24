import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CSS, { Property } from "csstype";
import "./MarketOrder.css";
import TableComponent, {
  TableComponentProps
} from "../components/TableComponent";
import { UniOrderStatus } from "../app/blockchain/blocks/meta";

type MarketOrderType = {
  orderId: string;
  offeringIcon?: string;
  bidingIcon?: string;
  orderStatus?: UniOrderStatus;
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
    <div className="ordercard6">
      <div className="order-brief-section6">
        <button className="banner-image6" onClick={toggle}>
          <div className="order-banner6">
            <div className="order-image6">
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src={offeringIcon}
              />
              <img
                className="order-image-child2"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src={bidingIcon}
              />
            </div>
            <div className="order-status6" style={orderStatusStyle}>
              <b className="open4">
                {UniOrderStatus[orderStatus ?? UniOrderStatus.Closed]}
              </b>
            </div>
          </div>
        </button>
        <Link
          className="title-section1"
          to={`/assertdetailview?orderId=${orderId}`}
        >
          <div className="sell-container">
            <b className="sell2">Sell</b>
            <b className="sell2">{offering}</b>
            <img
              className="frame-child6"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt7">{biding}</b>
          </div>
          <div className="details-section6">
            <div className="block34">
              <div className="sell2">Amount</div>
              <div className="sell2">Limit Min</div>
              <div className="sell2">Limit Max</div>
            </div>
            <div className="block44">
              <div className="sell2">{amount}</div>
              <div className="sell2">{limitMin}</div>
              <div className="sell2">{limitMax}</div>
            </div>
            <div className="block16">
              <div className="price5">Price</div>
            </div>
            <div className="block26">
              <b className="sell2">{price}</b>
            </div>
            <div className="details-section-child4" />
          </div>
        </Link>
      </div>
      <div className="trades-section6">
        <div className="width-controller6" />
      </div>
      <div className="userprofilesection1">
        <img
          className="userprofilesection-item"
          alt=""
          src="../asserts/ellipse-12@2x.png"
        />
        <div className="a-big-seller-group">
          <b className="sell2">{sellerName}</b>
          <div className="the-first-dao1">{daoName}</div>
        </div>
        <div className="container">
          <b className="sell2">{sellerRatings}</b>
          <div className="the-first-dao1">{sellerTrades}</div>
        </div>
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
