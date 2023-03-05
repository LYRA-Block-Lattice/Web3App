import { FunctionComponent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import "./PrimaryAccountContainer.css";

type PrimaryAccountContainerType = {
  qRCodeIcon?: string;
};

const PrimaryAccountContainer: FunctionComponent<
  PrimaryAccountContainerType
> = ({ qRCodeIcon }) => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  const onBalanceDisplayZoneClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/");
  }, [navigate]);

  const scanToPay = useCallback(() => {
    if (!auth.accountId) navigate("/openwallet?ret=/scantopay");
    else navigate("/scantopay");
  }, [navigate]);
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
            <button
              className="wallet-name-label"
              onClick={onBalanceDisplayZoneClick}
            >
              {app.name}
            </button>
            <div className="balance-display-zone-child" />
            <b className="usdtbalance">
              {app.wallet.balance.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="lyrlabel">LYR</b>
            <div className="balance-display-zone-item" />
            <b className="usdtbalance">
              {" "}
              {app.wallet.usdt.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="lyrlabel">USDT</b>
          </a>
          <div className="qrcode-button-wrapper">
            <button className="qrcode-button" onClick={scanToPay}>
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

export default PrimaryAccountContainer;
