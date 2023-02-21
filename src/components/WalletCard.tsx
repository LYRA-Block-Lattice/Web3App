import { FunctionComponent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import "./WalletCard.css";

const WalletCard: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  const scanToPay = useCallback(() => {
    if (!auth.accountId) navigate("/openwallet?ret=/scantopay");
    else navigate("/scantopay");
  }, [navigate]);

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
            <button className="wallet-name-label1">{app.name}</button>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance1">
              {app.wallet.balance.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">LYR</b>
            <div className="rectangle-div" />
            <b className="usdtbalance1">
              {app.wallet.usdt.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">USDT</b>
          </Link>
          <div className="qrcode-button-container">
            <button className="qrcode-button1" onClick={scanToPay}>
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
            <div className="nft-count">{app.wallet.nftcnt}</div>
            <b className="nft-label">NFT</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">{app.wallet.totcnt}</div>
            <b className="nft-label">TOT</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">{sellcnt}</div>
            <b className="nft-label">Selling</b>
          </button>
          <button className="go-nft-button">
            <div className="nft-count">{bidcnt}</div>
            <b className="nft-label">Buying</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
