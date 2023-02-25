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
    <div className="ordercard4">
      <div className="order-brief-section4">
        <button className="banner-image4" onClick={toggle}>
          <div className="order-banner4">
            <div className="order-image4">
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src={offeringIcon}
              />
              <img
                className="order-image-inner"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src={bidingIcon}
              />
            </div>
            <div className="order-status4" style={orderStatusStyle}>
              <b className="open2">
                {UniOrderStatus[orderStatus ?? UniOrderStatus.Closed]}
              </b>
            </div>
          </div>
        </button>
        <Link
          className="title-section4"
          to={`/assertdetailview?orderId=${orderId}`}
        >
          <div className="sell-group">
            <b className="a-big-seller">Sell</b>
            <b className="a-big-seller">{offering}</b>
            <img
              className="frame-child4"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt5">{biding}</b>
          </div>
          <div className="details-section4">
            <div className="block32">
              <div className="a-big-seller">Amount</div>
              <div className="a-big-seller">Limit Min</div>
              <div className="a-big-seller">Limit Max</div>
            </div>
            <div className="block42">
              <div className="a-big-seller">{amount}</div>
              <div className="a-big-seller">{limitMin}</div>
              <div className="a-big-seller">{limitMax}</div>
            </div>
            <div className="block14">
              <div className="price3">Price</div>
            </div>
            <div className="block24">
              <b className="a-big-seller">{price}</b>
            </div>
            <div className="details-section-child2" />
          </div>
        </Link>
      </div>
      <div className="trades-section4">
        <div className="width-controller4" />
      </div>
      <div className="userprofilesection">
        <img
          className="userprofilesection-child"
          alt=""
          src="../asserts/ellipse-12@2x.png"
        />
        <div className="a-big-seller-parent">
          <b className="a-big-seller">{sellerName}</b>
          <div className="the-first-dao">{daoName}</div>
        </div>
        <div className="parent">
          <b className="a-big-seller">{sellerRatings}</b>
          <div className="the-first-dao">{sellerTrades}</div>
        </div>
      </div>
      <div>
        {showTradeTable ? <TableComponent key={orderId} data={trades} /> : null}
      </div>
    </div>
  );
};

export default MarketOrder;
