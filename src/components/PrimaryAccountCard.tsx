import { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import "./PrimaryAccountCard.css";

const PrimaryAccountCard: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/wallethome");
  }, [navigate]);

  const scanToPay = useCallback(() => {
    if (!auth.accountId) navigate("/openwallet?ret=/scantopay");
    else navigate("/scantopay");
  }, [navigate]);

  return (
    <div className="wallet-card1">
      <div className="wallet-card-child">
        <div className="rectangle-container">
          <div className="rectangle6" />
        </div>
      </div>
      <div className="wallet-card-inner1">
        <div className="balance-display-zone-group">
          <button
            className="balance-display-zone1"
            onClick={onBalanceDisplayZoneClick}
          >
            <b className="wallet-name-label1">{app.name}</b>
            <div className="balance-display-zone-inner" />
            <b className="usdtbalance2">
              {app.wallet.balance.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </b>
            <b className="lyrlabel1">LYR</b>
            <div className="rectangle-div" />
          </button>
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
      </div>
    </div>
  );
};

export default PrimaryAccountCard;
