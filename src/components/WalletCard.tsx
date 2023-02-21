import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./WalletCard.css";

const WalletCard: FunctionComponent = () => {
  return (
    <div className="wallet-card1">
      <div className="wallet-card-inner1">
        <div className="rectangle-container">
          <div className="rectangle3" />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="balance-display-zone-group">
          <Link className="balance-display-zone1" to="/openwallet">
            <button className="wallet-name-label1">My Primary Account</button>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance1">1,025,000</b>
            <b className="usdtlabel">LYR</b>
            <div className="rectangle-div" />
            <b className="usdtbalance1">5,000</b>
            <b className="usdtlabel">USDT</b>
          </Link>
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
