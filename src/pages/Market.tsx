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
      <TopNavigationBar
        title="Market"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
        onHomeClick={onHomeClick}
        separator="../asserts/separator.svg"
        onContextPlusClick={onContextPlusClick}
        rectangle1="../asserts/rectangle-1.svg"
        iconleft="../asserts/iconleft.svg"
        ellipse="../asserts/ellipse.svg"
        ellipse1="../asserts/ellipse1.svg"
        vector7="../asserts/vector-7.svg"
        vector8="../asserts/vector-8.svg"
      />
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
        </div>
      </div>
      <DisplaySellItems cat={cat} />
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#0ebd8d"
        textColor1="#434343"
        textColor2="#434343"
      />
    </div>
  );
};

export default Market;
