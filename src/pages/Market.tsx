import { FunctionComponent, useState, useEffect, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useSelector } from "react-redux";
import MarketToolBar from "../components/MarketToolBar";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";
import BottomNavigationBar from "../components/BottomNavigationBar";

import "./Market.css";
import { useNavigate } from "react-router";
import TokenCatalogTabs from "../components/TokenCatalogTabs";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const [cat, setCat] = useState("");

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
    <div className="market">
      <TopNavigationBar title="Market" />
      <div className="orderandcatalog">
        <MarketToolBar
          homeIconInterlocution="../asserts/home--icon--interlocution.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution1.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution2.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution3.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution4.svg"
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
      <DisplaySellItems cat={cat} />
      <BottomNavigationBar
        boxAltLight="../asserts/box-alt-light.svg"
        moleculeLight="../asserts/molecule-light.svg"
        walletLight="../asserts/wallet-light.svg"
        userAltLight="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default Market;
