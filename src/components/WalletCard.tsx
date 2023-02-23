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
    <div className="wallet-card2">
      <div className="wallet-card-inner3">
        <div className="rectangle-frame">
          <div className="rectangle4" />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="balance-display-zone-container">
          <a className="balance-display-zone2">
            <button className="wallet-name-label2">{app.name}</button>
            <div className="line-div" />
            <b className="usdtbalance2">
              {app.wallet.balance.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">LYR</b>
            <div className="balance-display-zone-child1" />
            <b className="usdtbalance2">
              {app.wallet.usdt.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">USDT</b>
          </a>
          <div className="qrcode-button-frame">
            <button className="qrcode-button2" onClick={scanToPay}>
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
