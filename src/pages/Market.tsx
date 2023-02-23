import { FunctionComponent, useState, useEffect, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useSelector } from "react-redux";
import MarketToolBar from "../components/MarketToolBar";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";
import BottomNavigationBar from "../components/BottomNavigationBar";

import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TetherLink from "../components/TetherLink";

import "./Market.css";
import { useNavigate } from "react-router";
import TokenCatalogTabs from "../components/TokenCatalogTabs";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const [cat, setCat] = useState("");

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onBalanceDisplayZoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNewSell = useCallback(() => {
    //if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    //else
    navigate("/starttocreateorder");
  }, [navigate]);

  const onSwapButton1Click = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onDEXButtonClick = useCallback(() => {
    navigate("/viewtradesform");
  }, [navigate]);

  return (
    <div className="market main-content">
      <TopNavigationBar title="Market" />
      <div className="orderandcatalog">
        <MarketToolBarContainer
          homeIconInterlocution="../home--icon--interlocution5.svg"
          homeIconInterlocution1="../home--icon--interlocution6.svg"
          homeIconInterlocution2="../home--icon--interlocution7.svg"
          homeIconInterlocution3="../home--icon--interlocution8.svg"
          homeIconInterlocution4="../home--icon--interlocution9.svg"
        />
        <div className="searchsection">
          <input
            className="searchsection-child"
            type="search"
            placeholder="Search products/token/NFT/TOT etc."
          />
        </div>
        <div className="tradableorderssection">
          <div className="catalogtab1">
            <div className="nft-container">
              <b className="nft1">NFT</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Fiat</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Goods</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Service</b>
            </div>
            <div className="token-container">
              <b className="nft1">Token</b>
            </div>
          </div>
          <DisplaySellItems cat={cat} />
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image" onClick={onBannerImageClick}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../carbonuserservicedesk.svg"
                    />
                  </div>
                  <div className="order-status">
                    <b className="open">Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className="trades-section">
              <div className="width-controller" />
            </div>
            <div className="userprofilesection">
              <img
                className="userprofilesection-child"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="a-big-seller-parent">
                <b className="a-big-seller">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="a-big-seller">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image" onClick={onBannerImage1Click}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../carbonuserservicedesk1.svg"
                    />
                  </div>
                  <div className="order-status">
                    <b className="open">Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className="trades-section">
              <div className="width-controller" />
            </div>
            <div className="userprofilesection">
              <img
                className="userprofilesection-child"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="a-big-seller-parent">
                <b className="a-big-seller">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="a-big-seller">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Market;
