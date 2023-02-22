import { FunctionComponent, useState, useEffect, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
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
      <PrimaryAccountContainer qRCodeIcon="../asserts/qrcode-icon.svg" />
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
      <div className="orderandcatalog">
        <TokenCatalogTabs />
      </div>
      <DisplaySellItems cat={cat} />
      <BottomNavigationBar
        iconImageUrl="../asserts/box-alt-light.svg"
        moleculeImageUrl="../asserts/molecule-light.svg"
        walletImageUrl="../asserts/wallet-light.svg"
        userImageUrl="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default Market;
