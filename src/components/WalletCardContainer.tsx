import { FunctionComponent } from "react";
import "./WalletCardContainer.css";

const WalletCardContainer: FunctionComponent = () => {
  return (
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
                src="../asserts/qrcode-icon.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCardContainer;
