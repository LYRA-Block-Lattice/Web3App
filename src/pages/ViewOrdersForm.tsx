import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../components/OrderCard";
import "./ViewOrdersForm.css";
import { MARKET_GET_OWN_ORDERS } from "../app/actionTypes";
import { getAuthSelector, getMarketSelector } from "../app/selectors";
import { getTickerIcon, IOrder } from "../app/market/marketReducer";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import { set } from "immer/dist/internal";
import MarketToolBar from "../components/MarketToolBar";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

const arr = ["Open", "Partial", "Delist", "Closed", "Dispute"];

const ViewOrdersForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);
  const market = useSelector(getMarketSelector);

  const [value, setValue] = React.useState(0);
  const [odrs, setOdrs] = useState<IOrder[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    console.log(newValue);
    setValue(newValue);
    if (newValue == 0) {
      setOdrs(market.ownOrders!);
    } else {
      setOdrs(
        market.ownOrders!.filter((order) => order.status == arr[newValue - 1])
      );
    }
  };

  useEffect(() => {
    dispatch({
      type: MARKET_GET_OWN_ORDERS,
      payload: { accountId: auth.accountId }
    });
  }, []);

  useEffect(() => {
    if (value == 0) {
      setOdrs(market.ownOrders!);
    } else {
      setOdrs(
        market.ownOrders!.filter((order) => order.status == arr[value - 1])
      );
    }
  }, [market.ownOrders]);

  function truncate(str: any, n: any) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  return (
    <div className="viewordersform">
      <PrimaryAccountCard />
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <MarketToolBar />
        </div>
      </div>
      <div className="view-orders-parent">
        <div className="view-orders">View Orders</div>
        <button
          className="prepare-sell-order-button11"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="utility-button5">New</div>
        </button>
      </div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" />
        <Tab label="Open" />
        <Tab label="Partial" />
        <Tab label="Delist" />
        <Tab label="Closed" />
        <Tab label="Dispute" />
      </Tabs>
      {odrs?.map((order) => (
        <OrderCard
          key={order.orderid!}
          offering={order.offering}
          biding={order.biding}
          orderStatus={order.status}
          offeringImg={getTickerIcon(order.offering)}
          bidingImg={getTickerIcon(order.biding)}
          time={order.time}
          price={order.price.toString()}
          amount={order.amount.toString()}
          limitMin={order.limitmin.toString()}
          limitMax={order.limitmax.toString()}
          sold={order.sold.toString()}
          shelf={order.shelf.toString()}
          orderStatusBackgroundColor={
            order.status == "Open" ? "#2196F3" : "gray"
          }
          orderId={order.orderid!}
          daoId={order.daoid!}
        />
      ))}
    </div>
  );
};

export default ViewOrdersForm;
