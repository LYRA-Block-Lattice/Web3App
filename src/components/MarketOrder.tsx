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
    <div className="ordercard1">
      <div className="order-brief-section1">
        <button className="banner-image1" onClick={toggle}>
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
            <div className="order-status1" style={orderStatusStyle}>
              <b className="open1">
                {UniOrderStatus[orderStatus ?? UniOrderStatus.Closed]}
              </b>
            </div>
          </div>
        </button>
        <Link
          className="title-section1"
          to={`/assertdetailview?orderId=${orderId}`}
        >
          <div className="sell-parent">
            <b className="sell">Sell</b>
            <b className="sell">{offering}</b>
            <img className="arrow-icon" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt3">{biding}</b>
          </div>
          <div>{time.DateTime}</div>
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
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./MarketOrder.css";

type MarketOrderType = {
  /** Action props */
  onBannerImage4Click?: () => void;
};

const MarketOrder: FunctionComponent<MarketOrderType> = ({
  onBannerImage4Click
}) => {
  return (
    <div className="ordercard6">
      <div className="order-brief-section6">
        <button className="banner-image6" onClick={onBannerImage4Click}>
          <div className="order-banner6">
            <div className="order-image6">
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src="../asserts/icbaselinegeneratingtokens6.svg"
              />
              <img
                className="order-image-child2"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon5"
                alt=""
                src="../asserts/carbonuserservicedesk6.svg"
              />
            </div>
            <div className="order-status6">
              <b className="open4">Open</b>
            </div>
          </div>
        </button>
        <Link className="title-section6" to="/assertdetailview">
          <div className="sell-container">
            <b className="sell2">Sell</b>
            <b className="sell2">BTC</b>
            <img
              className="frame-child6"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt7">tether/USDT</b>
          </div>
          <div className="details-section6">
            <div className="block34">
              <div className="sell2">Amount</div>
              <div className="sell2">Limit Min</div>
              <div className="sell2">Limit Max</div>
            </div>
            <div className="block44">
              <div className="sell2">1113.2</div>
              <div className="sell2">1.2</div>
              <div className="sell2">3.2</div>
            </div>
            <div className="block16">
              <div className="price5">Price</div>
            </div>
            <div className="block26">
              <b className="sell2">10,323</b>
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
          <b className="sell2">A big seller</b>
          <div className="the-first-dao1">The First DAO</div>
        </div>
        <div className="container">
          <b className="sell2">98%</b>
          <div className="the-first-dao1">1024 Trades</div>
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
