import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./WalletCard.css";

const WalletCard: FunctionComponent = () => {
  return (
    <div className="wallet-card3">
      <div className="wallet-card-inner5">
        <div className="rectangle-wrapper1">
          <div className="rectangle5" />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="balance-display-zone-parent1">
          <Link className="balance-display-zone3" to="/openwallet">
            <button className="wallet-name-label3">My Primary Account</button>
            <div className="balance-display-zone-child2" />
            <b className="usdtbalance3">1,025,000</b>
            <b className="usdtlabel">LYR</b>
            <div className="balance-display-zone-child3" />
            <b className="usdtbalance3">5,000</b>
            <b className="usdtlabel">USDT</b>
          </Link>
          <div className="qrcode-button-wrapper1">
            <button className="qrcode-button3">
              <div className="qrcode-button-round3" />
              <img
                className="qrcode-icon3"
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
