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

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  return (
    <div className="viewordersform">
      <TopNavigationBar
        title="My Orders"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
      />
      <div className="wallet-card-container">
        <div className="wallet-card1">
          <div className="wallet-card-inner1">
            <div className="rectangle-container">
              <div className="rectangle3" />
            </div>
          </div>
          <div className="wallet-card-inner2">
            <div className="balance-display-zone-group">
              <a className="balance-display-zone1">
                <button className="wallet-name-label1">
                  My Primary Account
                </button>
                <div className="balance-display-zone-inner" />
                <b className="usdtbalance1">1,025,000</b>
                <b className="lyrlabel1">LYR</b>
                <div className="rectangle-div" />
              </a>
              <div className="qrcode-button-container">
                <button className="qrcode-button1">
                  <div className="qrcode-button-round1" />
                  <img
                    className="qrcode-icon1"
                    alt=""
                    src="../asserts/qrcode-icon.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
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
