import { FunctionComponent } from "react";
import "./WalletCard.css";

const WalletCard: FunctionComponent = () => {
  return (
    <div className="wallet-card2">
      <div className="wallet-card-inner3">
        <div className="rectangle-frame">
          <div className="rectangle4" />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="balance-display-zone-container">
          <a className="balance-display-zone2">
            <button className="wallet-name-label2">My Primary Account</button>
            <div className="line-div" />
            <b className="usdtbalance2">1,025,000</b>
            <b className="usdtlabel">LYR</b>
            <div className="balance-display-zone-child1" />
            <b className="usdtbalance2">5,000</b>
            <b className="usdtlabel">USDT</b>
          </a>
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

export default WalletCard;
