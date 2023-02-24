import { FunctionComponent } from "react";
import "./MarketToolBarContainer.css";

type MarketToolBarContainerType = {
  homeIconInterlocution?: string;
  homeIconInterlocution1?: string;
  homeIconInterlocution2?: string;
  homeIconInterlocution3?: string;
  homeIconInterlocution4?: string;
};

const MarketToolBarContainer: FunctionComponent<MarketToolBarContainerType> = ({
  homeIconInterlocution,
  homeIconInterlocution1,
  homeIconInterlocution2,
  homeIconInterlocution3,
  homeIconInterlocution4,
}) => {
  return (
    <div className="markettoolbar">
      <div className="swap-button-group">
        <button className="dex-button">
          <img
            className="home-icon-interlocution5"
            alt=""
            src={homeIconInterlocution}
          />
          <div className="ranking5">Market</div>
        </button>
        <button className="dex-button">
          <img
            className="home-icon-interlocution5"
            alt=""
            src={homeIconInterlocution1}
          />
          <div className="ranking5">New Sell</div>
        </button>
        <button className="dex-button">
          <img
            className="home-icon-interlocution5"
            alt=""
            src={homeIconInterlocution2}
          />
          <div className="ranking5">Orders</div>
        </button>
        <button className="dex-button">
          <img
            className="home-icon-interlocution5"
            alt=""
            src={homeIconInterlocution3}
          />
          <div className="ranking5">Trades</div>
        </button>
        <button className="dex-button">
          <img
            className="home-icon-interlocution5"
            alt=""
            src={homeIconInterlocution4}
          />
          <div className="ranking9">ODR</div>
        </button>
      </div>
    </div>
  );
};

export default MarketToolBarContainer;
