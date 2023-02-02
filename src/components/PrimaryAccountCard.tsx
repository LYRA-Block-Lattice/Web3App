import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PrimaryAccountCard.css";

const PrimaryAccountCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/wallethome");
  }, [navigate]);

  return (
    <div className="wallet-card1">
      <div className="wallet-card-child">
        <div className="rectangle-container">
          <div className="rectangle6" />
        </div>
      </div>
      <div className="wallet-card-inner1">
        <div className="balance-display-zone-group">
          <button
            className="balance-display-zone1"
            onClick={onBalanceDisplayZoneClick}
          >
            <b className="wallet-name-label1">My Primary Account</b>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance2">1,025,000</b>
            <b className="lyrlabel1">LYR</b>
            <div className="rectangle-div" />
          </button>
          <div className="qrcode-button-container">
            <button className="qrcode-button1">
              <div className="qrcode-button-round1" />
              <img
                className="qrcode-icon1"
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
