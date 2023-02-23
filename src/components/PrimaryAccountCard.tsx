import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PrimaryAccountCard.css";

const PrimaryAccountCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/wallethome");
  }, [navigate]);

  return (
    <div className="wallet-card2">
      <div className="wallet-card-inner3">
        <div className="rectangle-frame">
          <div className="rectangle4" />
        </div>
      </div>
      <div className="wallet-card-inner4">
        <div className="balance-display-zone-container">
          <button
            className="balance-display-zone2"
            onClick={onBalanceDisplayZoneClick}
          >
            <b className="wallet-name-label2">My Primary Account</b>
            <div className="line-div" />
            <b className="usdtbalance2">1,025,000</b>
            <b className="lyrlabel2">LYR</b>
            <div className="balance-display-zone-child1" />
          </button>
          <div className="qrcode-button-frame">
            <button className="qrcode-button2">
              <div className="qrcode-button-round2" />
              <img
                className="qrcode-icon2"
                alt=""
                src="../asserts/qrcode-icon.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryAccountCard;
