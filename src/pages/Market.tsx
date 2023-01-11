import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";

import "./Market.css";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const [cat, setCat] = useState("");

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSwapButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  const onSwapButton1Click = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onDEXButtonClick = useCallback(() => {
    navigate("/viewtradesform");
  }, [navigate]);

  return (
    <div className="market">
      <div className="wallet-card1">
        <div className="wallet-card-child">
          <div className="rectangle-container">
            <div className="rectangle1" />
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
              <b className="usdtbalance2">{app.wallet.balance}</b>
              <b className="lyrlabel1">LYR</b>
              <div className="rectangle-div" />
            </button>
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
        </div>
      </div>
      <div className="iconssection-container">
        <div className="iconssection1">
          <div className="swap-button-group">
            <button className="dex-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution5.svg"
              />
              <div className="ranking5">New Sell</div>
            </button>
            <button className="dex-button" onClick={onSwapButton1Click}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution6.svg"
              />
              <div className="ranking5">My Orders</div>
            </button>
            <button className="dex-button" onClick={onDEXButtonClick}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution7.svg"
              />
              <div className="ranking5">My Trades</div>
            </button>
            <button className="dex-button">
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution8.svg"
              />
              <div className="ranking8">ODR</div>
            </button>
          </div>
        </div>
      </div>
      <div className="searchsection">
        <input
          className="searchsection-child"
          type="search"
          placeholder="Search products/token/NFT/TOT etc."
        />
      </div>
      <div className="orderandcatalog">
        <div className="tradableorderssection1">
          <div className="catalogtab1">
            <button className="tokentab1" onClick={() => setCat("")}>
              <b className="token1">Token</b>
              <div className="ellipse-container">
                <img
                  className="group-inner"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div2">18</div>
              </div>
            </button>
            <button className="nft-tab1" onClick={() => setCat("nft/")}>
              <b className="token1">NFT</b>
              <div className="ellipse-container">
                <img
                  className="group-inner"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div2">18</div>
              </div>
            </button>
            <button className="fiat-tab1" onClick={() => setCat("fiat/")}>
              <b className="fiat1">Fiat</b>
            </button>
            <button className="fiat-tab1" onClick={() => setCat("tot/")}>
              <b className="fiat1">Goods</b>
            </button>
            <button className="fiat-tab1" onClick={() => setCat("svc/")}>
              <b className="fiat1">Service</b>
            </button>
          </div>
        </div>
      </div>
      <DisplaySellItems />
    </div>
  );
};

export default Market;
