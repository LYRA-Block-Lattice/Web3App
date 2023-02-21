import { FunctionComponent, useCallback } from "react";
import MarketToolBar from "../components/MarketToolBar";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/OrderCard";
import "./ViewOrdersForm.css";

const ViewOrdersForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  return (
    <div className="viewordersform">
      <div className="wallet-card1">
        <div className="wallet-card-inner1">
          <div className="rectangle-container">
            <div className="rectangle3" />
          </div>
        </div>
        <div className="wallet-card-inner2">
          <div className="balance-display-zone-group">
            <a className="balance-display-zone1">
              <button className="wallet-name-label1">My Primary Account</button>
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
                  src="../asserts/qrcode-icon2.svg"
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
      <div className="view-orders-parent">
        <div className="view-orders">View Orders</div>
        <button
          className="prepare-sell-order-button11"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="utility-button5">New</div>
        </button>
      </div>
      <OrderCard
        offering="BTC"
        biding="tether/USDT"
        orderStatus="Open"
        offeringImg="../asserts/icbaselinegeneratingtokens.svg"
        bidingImg="../asserts/carbonuserservicedesk.svg"
        time="12/29/2022 10:25:37 AM"
        price="10,323"
        amount="1113.2"
        limitMin="3.3"
        limitMax="4.3"
        sold="12"
        shelf="123"
        orderStatusBackgroundColor="#2196F3"
      />
    </div>
  );
};

export default ViewOrdersForm;
