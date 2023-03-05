import { FunctionComponent } from "react";
import "./PrimaryAccountContainer.css";

const PrimaryAccountContainer: FunctionComponent = () => {
  return (
    <div className="wallet-card">
      <div className="wallet-card-inner">
        <div className="rectangle-wrapper">
          <div className="rectangle2" />
        </div>
      </div>
      <div className="frame-parent4">
        <div className="balance-display-zone-parent">
          <a className="balance-display-zone">
            <button className="wallet-name-label">My Primary Account</button>
            <div className="balance-display-zone-child" />
            <b className="usdtbalance">1,025,000</b>
            <b className="lyrlabel">LYR</b>
            <div className="balance-display-zone-item" />
            <b className="usdtbalance">5,000</b>
            <b className="lyrlabel">USDT</b>
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
        <div className="token-lists">
          <button className="go-nft-button">
            <div className="nft-count">12</div>
            <b className="nft-label">NFT</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">3</div>
            <b className="nft-label">TOT</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">0</div>
            <b className="nft-label">Selling</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">0</div>
            <b className="nft-label">Buying</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryAccountContainer;
