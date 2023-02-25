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
      <div className="swap-button-parent">
        <button className="swap-button">
          <img
            className="home-icon-interlocution"
            alt=""
            src={homeIconInterlocution}
          />
          <div className="ranking">Market</div>
        </button>
        <button className="swap-button">
          <img
            className="home-icon-interlocution"
            alt=""
            src={homeIconInterlocution1}
          />
          <div className="ranking">New Sell</div>
        </button>
        <button className="swap-button">
          <img
            className="home-icon-interlocution"
            alt=""
            src={homeIconInterlocution2}
          />
          <div className="ranking">Orders</div>
        </button>
        <button className="swap-button">
          <img
            className="home-icon-interlocution"
            alt=""
            src={homeIconInterlocution3}
          />
          <div className="ranking">Trades</div>
        </button>
        <button className="swap-button">
          <img
            className="home-icon-interlocution"
            alt=""
            src={homeIconInterlocution4}
          />
          <div className="ranking4">ODR</div>
        </button>
      </div>
    </div>
  );
};

export default MarketToolBarContainer;
