import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MarketToolBar.css";

const MarketToolBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSwapButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  const onSwapButton1Click = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onDEXButtonClick = useCallback(() => {
    navigate("/viewtradesform");
  }, [navigate]);

  return (
    <div className="swap-button-container">
      <button className="dex-button" onClick={onSwapButtonClick}>
        <img
          className="home-icon-interlocution10"
          alt=""
          src="../asserts/home--icon--interlocution.svg"
        />
        <div className="ranking10">New Sell</div>
      </button>
      <button className="dex-button" onClick={onSwapButton1Click}>
        <img
          className="home-icon-interlocution10"
          alt=""
          src="../asserts/home--icon--interlocution1.svg"
        />
        <div className="ranking10">My Orders</div>
      </button>
      <button className="dex-button" onClick={onDEXButtonClick}>
        <img
          className="home-icon-interlocution10"
          alt=""
          src="../asserts/home--icon--interlocution2.svg"
        />
        <div className="ranking10">My Trades</div>
      </button>
      <button className="dex-button">
        <img
          className="home-icon-interlocution10"
          alt=""
          src="../asserts/home--icon--interlocution3.svg"
        />
        <div className="ranking13">ODR</div>
      </button>
    </div>
  );
};

export default MarketToolBar;
