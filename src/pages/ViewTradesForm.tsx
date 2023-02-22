import { FunctionComponent } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBar from "../components/MarketToolBar";
import TradeCard from "../components/TradeCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewTradesForm.css";

const ViewTradesForm: FunctionComponent = () => {
  return (
    <div className="viewtradesform">
      <TopNavigationBar title="My Trades" />
      <MarketToolBar
        homeIconInterlocution="../asserts/home--icon--interlocution10.svg"
        homeIconInterlocution1="../asserts/home--icon--interlocution11.svg"
        homeIconInterlocution2="../asserts/home--icon--interlocution12.svg"
        homeIconInterlocution3="../asserts/home--icon--interlocution13.svg"
        homeIconInterlocution4="../asserts/home--icon--interlocution14.svg"
      />
      <div className="view-trades-wrapper">
        <div className="view-trades">View Trades</div>
      </div>
      <div className="ordercard-wrapper">
        <TradeCard
          tradeStatus="Open"
          biding="BTC"
          offering="tether/USDT"
          time="12/29/2022 10:25:37 AM"
          price="10,323"
          amount="1113.2"
          bidingImg="../asserts/icbaselinegeneratingtokens.svg"
          offeringImg="../asserts/carbonuserservicedesk.svg"
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

export default ViewTradesForm;
