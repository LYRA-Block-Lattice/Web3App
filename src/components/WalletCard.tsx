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
    <div className="wallet-card3">
      <div className="wallet-card-inner5">
        <div className="rectangle-wrapper1">
          <div className="rectangle5" />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="balance-display-zone-parent1">
          <Link className="balance-display-zone3" to="/openwallet">
            <button className="wallet-name-label3">{app.name}</button>
            <div className="balance-display-zone-child2" />
            <b className="usdtbalance3">
              {app.wallet.balance.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">LYR</b>
            <div className="balance-display-zone-child3" />
            <b className="usdtbalance3">
              {app.wallet.usdt.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="usdtlabel">USDT</b>
          </Link>
          <div className="qrcode-button-wrapper1">
            <button className="qrcode-button3" onClick={scanToPay}>
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
