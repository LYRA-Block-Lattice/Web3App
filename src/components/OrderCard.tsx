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
    <div className="ordercard2">
      <div className="order-brief-section2">
        <button className="banner-image2" onClick={toggle}>
          <div className="order-banner2">
            <div className="order-image2">
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src={offeringImg}
              />
              <img
                className="order-image-inner"
                alt=""
                src="../asserts/arrow-12.svg"
              />
              <img
                className="icbaseline-generating-tokens-icon2"
                alt=""
                src={bidingImg}
              />
            </div>
            <div className="order-status2" style={orderStatusStyle}>
              <b className="open2">{orderStatus}</b>
            </div>
          </div>
        </button>
        <a
          className="title-section2"
          target="_blank"
          href={BlockchainAPI.getBlockExplorerUrl(orderId)}
        >
          <div className="sell-group">
            <b className="sold">Sell</b>
            <b className="sold">{offering}</b>
            <img
              className="frame-child4"
              alt=""
              src="../asserts/arrow-22.svg"
            />
            <b className="tetherusdt4">{biding}</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
            <div className="sold">{time}</div>
          </div>
          <div className="details-section2">
            <div className="block12">
              <div className="sold">Price</div>
              <div className="sold">Limit Min</div>
              <div className="sold">Sold</div>
            </div>
            <div className="block22">
              <div className="sold">{price}</div>
              <div className="sold">{limitMin}</div>
              <div className="sold">{sold}</div>
            </div>
            <div className="details-section-inner" />
            <div className="block32">
              <div className="sold">Amount</div>
              <div className="sold">Limit Max</div>
              <div className="sold">Shelf</div>
            </div>
            <div className="block22">
              <div className="sold">{amount}</div>
              <div className="sold">{limitMax}</div>
              <div className="sold">{shelf}</div>
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
      <div className="itemactions1">
        {orderStatus === "Partial" ? (
          <button className="delist-button1" onClick={onDelist}>
            <div className="mini-button4">Delist</div>
          </button>
        ) : null}
        {orderStatus === "Delist" ? (
          <button className="delist-button1" onClick={onCloseOrder}>
            <div className="mini-button4">Close</div>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default OrderCard;
