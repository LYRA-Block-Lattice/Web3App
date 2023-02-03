import { FunctionComponent, useCallback } from "react";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useNavigate } from "react-router-dom";
import MarketOrder from "../components/MarketOrder";
import "./Market.css";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();

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
      <PrimaryAccountCard />
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <div className="swap-button-parent">
            <button className="swap-button" onClick={onSwapButtonClick}>
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
            <button className="tokentab">
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
            <button className="nft-tab">
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
            <button className="fiat-tab">
              <b className="fiat">Fiat</b>
            </button>
            <button className="fiat-tab">
              <b className="fiat">Goods</b>
            </button>
            <button className="fiat-tab">
              <b className="fiat">Service</b>
            </button>
          </div>
        </div>
        <div className="tradableorderssection1">
          <MarketOrder
            offeringIcon="../asserts/icbaselinegeneratingtokens.svg"
            bidingIcon="../asserts/carbonuserservicedesk.svg"
            orderStatus="Open"
            offering="BTC"
            biding="tether/USDT"
            amount="1113.2"
            limitMin="1.2"
            limitMax="3.2"
            price="10,323"
            sellerName="A big seller"
            daoName="The First DAO"
            sellerRatings="98%"
            sellerTrades="1024 Trades"
          />
          <MarketOrder
            offeringIcon="../asserts/icbaselinegeneratingtokens1.svg"
            bidingIcon="../asserts/carbonuserservicedesk1.svg"
            orderStatus="Open"
            offering="BTC"
            biding="tether/USDT"
            amount="1113.2"
            limitMin="1.2"
            limitMax="3.2"
            price="10,323"
            sellerName="A big seller"
            daoName="The First DAO"
            sellerRatings="98%"
            sellerTrades="1024 Trades"
          />
        </div>
      </div>
    </div>
  );
};

export default Market;
