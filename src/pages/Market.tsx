import { FunctionComponent, useCallback, useState, useEffect } from "react";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";

import "./Market.css";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const [cat, setCat] = useState("");

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNewSell = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else navigate("/starttocreateorder");
  }, [navigate]);

  const onSwapButton1Click = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onDEXButtonClick = useCallback(() => {
    navigate("/viewtradesform");
  }, [navigate]);

  return (
    <div className="market">
      <PrimaryAccountCard />
      <div className="iconssection-container">
        <div className="iconssection1">
          <div className="swap-button-group">
            <button className="dex-button" onClick={onNewSell}>
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
