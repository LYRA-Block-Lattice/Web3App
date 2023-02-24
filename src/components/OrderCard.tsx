import {
  FunctionComponent,
  useMemo,
  useState,
  useEffect,
  useCallback
} from "react";
import * as actionTypes from "../app/actionTypes";
import CSS, { Property } from "csstype";
import "./OrderCard.css";

import TableComponent, {
  TableComponentProps
} from "../components/TableComponent";
import { useNavigate } from "react-router";
import { BlockchainAPI } from "../app/blockchain/blockchain-api";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";

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
  daoId: string;
  orderId: string;

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
  daoId,
  orderId,
  orderStatusBackgroundColor
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [trades, setTrades] = useState<any[]>([]);
  const [showTradeTable, setShowTradeTable] = useState(false);

  useEffect(() => {
    BlockchainAPI.getTradeForOrder(orderId).then((ret) => {
      setTrades(ret.data);
    });
  }, []);

  const toggle = () => {
    setShowTradeTable(!showTradeTable);
  };

  const orderStatusStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: orderStatusBackgroundColor
    };
  }, [orderStatusBackgroundColor]);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  const onDelist = useCallback(() => {
    console.log("delist order.");
    dispatch({
      type: actionTypes.WALLET_DELIST_ORDER,
      payload: {
        daoId: daoId,
        orderId: orderId,
        accountId: app.wallet.accountId
      }
    });
  }, [daoId, orderId]);

  const onCloseOrder = useCallback(() => {
    console.log("close order.");
    dispatch({
      type: actionTypes.WALLET_CLOSE_ORDER,
      payload: {
        daoId: daoId,
        orderId: orderId,
        accountId: app.wallet.accountId
      }
    });
  }, [daoId, orderId]);

  return (
    <div className="ordercard">
      <div className="order-brief-section">
        <button className="banner-image" onClick={toggle}>
          <div className="order-banner">
            <div className="order-image">
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={offeringImg}
              />
              <img
                className="order-image-child"
                alt=""
                src="../asserts/arrow-11.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon"
                alt=""
                src={bidingImg}
              />
            </div>
            <div className="order-status" style={orderStatusStyle}>
              <b className="open">{orderStatus}</b>
            </div>
          </div>
        </button>
        <a
          className="title-section"
          target="_blank"
          href={BlockchainAPI.getBlockExplorerUrl(orderId)}
        >
          <div className="sell-parent">
            <b className="sell">Sell</b>
            <b className="sell">{offering}</b>
            <img className="arrow-icon" alt="" src="../asserts/arrow-21.svg" />
            <b className="tetherusdt2">{biding}</b>
          </div>
          <div className="title-section-child" />
          <div className="am-wrapper">
            <div className="sell">{time}</div>
          </div>
          <div className="details-section">
            <div className="block1">
              <div className="sell">Price</div>
              <div className="sell">Limit Min</div>
              <div className="sell">Sold</div>
            </div>
            <div className="block2">
              <div className="sell">{price}</div>
              <div className="sell">{limitMin}</div>
              <div className="sell">{sold}</div>
            </div>
            <div className="details-section-child" />
            <div className="block3">
              <div className="sell">Amount</div>
              <div className="sell">Limit Max</div>
              <div className="sell">Shelf</div>
            </div>
            <div className="block2">
              <div className="sell">{amount}</div>
              <div className="sell">{limitMax}</div>
              <div className="sell">{shelf}</div>
            </div>
          </div>
        </a>
      </div>
      {orderStatus == "Partial" || orderStatus == "Delist" ? (
        <div className="trades-section2">
          <div className="width-controller2">
            {showTradeTable ? <TableComponent data={trades} /> : null}
          </div>
        </div>
      ) : null}
      <div className="trades-section">
        <div className="width-controller" />
      </div>
      <div className="itemactions">
        {orderStatus === "Partial" ? (
          <button className="delist-button" onClick={onDelist}>
            <div className="mini-button2">Delist</div>
          </button>
        ) : null}
        {orderStatus === "Delist" ? (
          <button className="delist-button" onClick={onCloseOrder}>
            <div className="mini-button2">Close</div>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default OrderCard;
