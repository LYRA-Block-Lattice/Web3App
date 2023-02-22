import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBar from "../components/MarketToolBar";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/OrderCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewOrdersForm.css";

const ViewOrdersForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  return (
    <div className="viewordersform">
      <TopNavigationBar title="My Orders" />
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
          className="prepare-sell-order-button12"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="utility-button5">New</div>
        </button>
      </div>
      <div className="ordercard-container">
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
      <BottomNavigationBar
        boxAltLight="../asserts/box-alt-light.svg"
        moleculeLight="../asserts/molecule-light.svg"
        walletLight="../asserts/wallet-light.svg"
        userAltLight="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default ViewOrdersForm;
