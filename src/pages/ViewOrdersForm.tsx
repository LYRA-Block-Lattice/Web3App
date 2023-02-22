import { FunctionComponent, useCallback } from "react";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import MarketToolBar from "../components/MarketToolBar";
import OrderCard from "../components/OrderCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewOrdersForm.css";

const ViewOrdersForm: FunctionComponent = () => {
  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onHomeClick = useCallback(() => {
    //TODO: back home
  }, []);

  const onNavigationPrepareSellOrderClick = useCallback(() => {
    //TODO: context menu
  }, []);

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
