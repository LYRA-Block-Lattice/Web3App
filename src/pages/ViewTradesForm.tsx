import { FunctionComponent } from "react";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import MarketToolBar from "../components/MarketToolBar";
import TradeCard from "../components/TradeCard";
import "./ViewTradesForm.css";

const ViewTradesForm: FunctionComponent = () => {
  return (
    <div className="viewtradesform">
      <PrimaryAccountContainer qRCodeIcon="../asserts/qrcode-icon2.svg" />
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
  );
};

export default ViewTradesForm;
