import { FunctionComponent, useState, useEffect, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useSelector } from "react-redux";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";
import BottomNavigationBar from "../components/BottomNavigationBar";

import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TetherLink from "../components/TetherLink";

import "./Market.css";
import { useNavigate } from "react-router";

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

  const onBannerImageClick = useCallback(() => {}, []);
  return (
    <div className="market main-content">
      <TopNavigationBar title="Market" />
      <div className="orderandcatalog">
        <MarketToolBarContainer
          homeIconInterlocution="../asserts/home--icon--interlocution5.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution6.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution7.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution8.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution9.svg"
        />
        <div className="searchsection">
          <input
            className="searchsection-child"
            type="search"
            placeholder="Search products/token/NFT/TOT etc."
          />
        </div>
        <div className="tradableorderssection">
          <div className="catalogtab">
            <div className="nft-wrapper">
              <b className="nft">NFT</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Fiat</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Goods</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Service</b>
            </div>
            <div className="token-wrapper">
              <b className="nft">Token</b>
            </div>
          </div>
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image" onClick={onBannerImageClick}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../asserts/arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/carbonuserservicedesk.svg"
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
                src="../asserts/ellipse-1@2x.png"
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
              <button className="banner-image" onClick={onBannerImageClick}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../asserts/arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/carbonuserservicedesk1.svg"
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
                src="../asserts/ellipse-1@2x.png"
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
