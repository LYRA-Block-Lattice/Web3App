import { FunctionComponent } from "react";
import MarketToolBar from "../components/MarketToolBar";
import TradeCard from "../components/TradeCard";
import "./ViewTradesForm.css";

const ViewTradesForm: FunctionComponent = () => {
  return (
    <div className="viewtradesform">
      <div className="wallet-card">
        <div className="wallet-card-inner">
          <div className="rectangle-wrapper">
            <div className="rectangle2" />
          </div>
        </div>
        <div className="wallet-card-child">
          <div className="balance-display-zone-parent">
            <a className="balance-display-zone">
              <button className="wallet-name-label">My Primary Account</button>
              <div className="balance-display-zone-child" />
              <b className="usdtbalance">1,025,000</b>
              <b className="lyrlabel">LYR</b>
              <div className="balance-display-zone-item" />
            </a>
            <div className="qrcode-button-wrapper">
              <button className="qrcode-button">
                <div className="qrcode-button-round" />
                <img
                  className="qrcode-icon"
                  alt=""
                  src="../asserts/qrcode-icon2.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
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
