import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import "./MarketToolBar.css";

type MarketToolBarType = {
  homeIconInterlocution?: string;
  homeIconInterlocution1?: string;
  homeIconInterlocution2?: string;
  homeIconInterlocution3?: string;
  homeIconInterlocution4?: string;
};

const MarketToolBar: FunctionComponent<MarketToolBarType> = ({
  homeIconInterlocution,
  homeIconInterlocution1,
  homeIconInterlocution2,
  homeIconInterlocution3,
  homeIconInterlocution4
}) => {
  const navigate = useNavigate();

  return (
    <div className="markettoolbar">
      <div className="swap-button-container">
        <button className="dex-button" onClick={() => navigate("/")}>
          <img
            className="home-icon-interlocution10"
            alt=""
            src={homeIconInterlocution}
          />
          <div className="ranking10">Market</div>
        </button>
        <button
          className="dex-button"
          onClick={() => navigate("/starttocreateorder")}
        >
          <img
            className="home-icon-interlocution10"
            alt=""
            src={homeIconInterlocution1}
          />
          <div className="ranking10">New Sell</div>
        </button>
        <button
          className="dex-button"
          onClick={() => navigate("/viewordersform")}
        >
          <img
            className="home-icon-interlocution10"
            alt=""
            src={homeIconInterlocution2}
          />
          <div className="ranking10">Orders</div>
        </button>
        <button
          className="dex-button"
          onClick={() => navigate("/viewtradesform")}
        >
          <img
            className="home-icon-interlocution10"
            alt=""
            src={homeIconInterlocution3}
          />
          <div className="ranking10">Trades</div>
        </button>
        <button className="dex-button">
          <img
            className="home-icon-interlocution10"
            alt=""
            src={homeIconInterlocution4}
          />
          <div className="ranking14">ODR</div>
        </button>
      </div>
    </div>
  );
};

export default MarketToolBar;
