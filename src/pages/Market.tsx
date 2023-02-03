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
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <div className="swap-button-parent">
            <button className="swap-button" onClick={onNewSell}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution.svg"
              />
              <div className="ranking">New Sell</div>
            </button>
            <button className="swap-button" onClick={onSwapButton1Click}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution1.svg"
              />
              <div className="ranking">My Orders</div>
            </button>
            <button className="swap-button" onClick={onDEXButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution2.svg"
              />
              <div className="ranking">My Trades</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution3.svg"
              />
              <div className="ranking3">ODR</div>
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
        <div className="tradableorderssection">
          <div className="catalogtab">
            <button className="tokentab" onClick={() => setCat("Token")}>
              <b className="token">Token</b>
              <div className="ellipse-parent">
                <img
                  className="group-child"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div">18</div>
              </div>
            </button>
            <button className="nft-tab" onClick={() => setCat("NFT")}>
              <b className="token">NFT</b>
              <div className="ellipse-parent">
                <img
                  className="group-child"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div">18</div>
              </div>
            </button>
            <button className="fiat-tab" onClick={() => setCat("Fiat")}>
              <b className="fiat">Fiat</b>
            </button>
            <button className="fiat-tab" onClick={() => setCat("Goods")}>
              <b className="fiat">Goods</b>
            </button>
            <button className="fiat-tab" onClick={() => setCat("Service")}>
              <b className="fiat">Service</b>
            </button>
          </div>
        </div>
      </div>
      <DisplaySellItems cat={cat} />
    </div>
  );
};

export default Market;
