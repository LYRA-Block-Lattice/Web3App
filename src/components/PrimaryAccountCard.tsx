import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PrimaryAccountCard.css";

const PrimaryAccountCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/wallethome");
  }, [navigate]);

  return (
    <div className="wallet-card">
      <div className="wallet-card-inner">
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
      </div>
      <div className="wallet-card-child">
        <div className="balance-display-zone-parent">
          <button
            className="balance-display-zone"
            onClick={onBalanceDisplayZoneClick}
          >
            <b className="wallet-name-label">My Primary Account</b>
            <div className="balance-display-zone-child" />
            <b className="usdtbalance">1,025,000</b>
            <b className="lyrlabel">LYR</b>
            <div className="balance-display-zone-item" />
          </button>
          <div className="qrcode-button-wrapper">
            <button className="qrcode-button">
              <div className="qrcode-button-round" />
              <img
                className="qrcode-icon"
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
