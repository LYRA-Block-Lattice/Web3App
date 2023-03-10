import { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import "./WalletCardContainer.css";

const WalletCardContainer: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const scanToPay = useCallback(() => {
    if (!auth.accountId) navigate("/openwallet?ret=/scantopay");
    else navigate("/scantopay");
  }, [navigate]);

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
            <button className="wallet-name-label1">{app.name}</button>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance2">
              {app.wallet.usdt.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="lyrlabel1">LYR</b>
            <div className="rectangle-div" />
          </a>
          <div className="qrcode-button-container">
            <button
              title="Show QR-Code"
              className="qrcode-button1"
              onClick={scanToPay}
            >
              <div className="qrcode-button-round1" />
              <img
                className="qrcode-icon1"
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
