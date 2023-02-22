import { FunctionComponent, useState, useEffect, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import MarketToolBar from "../components/MarketToolBar";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../components/OrderCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewOrdersForm.css";
import { MARKET_GET_OWN_ORDERS } from "../app/actionTypes";
import { getAuthSelector, getMarketSelector } from "../app/selectors";
import { getTickerIcon, IOrder } from "../app/market/marketReducer";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router";

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
      <nav className="navigation27">
        <button
          className="mini-programs-buttons14"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft7" alt="" src="../asserts/iconleft.svg" />
        </button>
        <button className="title12" onClick={onTitleClick}>
          My Orders
        </button>
        <div className="mini-programs-buttons15">
          <div className="stroke7" />
          <button className="home7" onClick={onHomeClick}>
            <img
              className="ellipse-icon14"
              alt=""
              src="../asserts/ellipse.svg"
            />
            <img
              className="ellipse-icon15"
              alt=""
              src="../asserts/ellipse1.svg"
            />
          </button>
          <img
            className="separator-icon7"
            alt=""
            src="../asserts/separator1.svg"
          />
          <button
            className="navigationprepare-sell-order7"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child17"
              alt=""
              src="../asserts/rectangle-17.svg"
            />
            <img
              className="navigationprepare-sell-order-child18"
              alt=""
              src="../asserts/vector-7.svg"
            />
            <img
              className="navigationprepare-sell-order-child19"
              alt=""
              src="../asserts/vector-8.svg"
            />
          </button>
        </div>
      </nav>
      <div className="wallet-card-container">
        <PrimaryAccountContainer />
        <MarketToolBar
          homeIconInterlocution="../asserts/home--icon--interlocution15.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution16.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution17.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution18.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution19.svg"
        />
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
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor2="#0ebd8d"
      />
    </div>
  );
};

export default ViewOrdersForm;
