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
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Market;
