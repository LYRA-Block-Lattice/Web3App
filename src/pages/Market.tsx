import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";

import "./Market.css";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);

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
        <div className="frame-div">
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
        <div className="iconssection2">
          <div className="swap-button-container">
            <button className="dex-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution10"
                alt=""
                src="../asserts/home--icon--interlocution10.svg"
              />
              <div className="ranking10">New Sell</div>
            </button>
            <button className="dex-button" onClick={onSwapButton1Click}>
              <img
                className="home-icon-interlocution10"
                alt=""
                src="../asserts/home--icon--interlocution11.svg"
              />
              <div className="ranking10">My Orders</div>
            </button>
            <button className="dex-button" onClick={onDEXButtonClick}>
              <img
                className="home-icon-interlocution10"
                alt=""
                src="../asserts/home--icon--interlocution12.svg"
              />
              <div className="ranking10">My Trades</div>
            </button>
            <button className="dex-button">
              <img
                className="home-icon-interlocution10"
                alt=""
                src="../asserts/home--icon--interlocution13.svg"
              />
              <div className="ranking13">ODR</div>
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
            <button className="tokentab1">
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
            <button className="nft-tab1">
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
            <button className="fiat-tab1">
              <b className="fiat1">Fiat</b>
            </button>
            <button className="fiat-tab1">
              <b className="fiat1">Goods</b>
            </button>
            <button className="fiat-tab1">
              <b className="fiat1">Service</b>
            </button>
          </div>
          <DisplaySellItems />
        </div>
      </div>
    </div>
  );
};

export default Market;
