import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MarketOrder from "../components/MarketOrder";
import "./Market.css";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();

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
              <b className="wallet-name-label1">My Primary Account</b>
              <div className="balance-display-zone-inner" />
              <b className="usdtbalance2">1,025,000</b>
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
        </div>
        <div className="tradableorderssection2">
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
            offeringIcon="icbaselinegeneratingtokens1.svg"
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
