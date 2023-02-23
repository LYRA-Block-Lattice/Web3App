import { FunctionComponent } from "react";
import "./WalletCardContainer.css";

const WalletCardContainer: FunctionComponent = () => {
  return (
    <div className="wallet-card1">
      <div className="wallet-card-child">
        <div className="rectangle-container">
          <div className="rectangle3" />
        </div>
      </div>
      <div className="wallet-card-inner1">
        <div className="balance-display-zone-group">
          <a className="balance-display-zone1">
            <button className="wallet-name-label1">My Primary Account</button>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance2">1,025,000</b>
            <b className="lyrlabel1">LYR</b>
            <div className="rectangle-div" />
          </a>
          <div className="qrcode-button-container">
            <button className="qrcode-button1">
              <div className="qrcode-button-round1" />
              <img className="qrcode-icon1" alt="" src="../qrcode-icon.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCardContainer;
