import { FunctionComponent, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TopNavigationBar from "../components/TopNavigationBar";
import { useSelector } from "react-redux";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";
import BottomNavigationBar from "../components/BottomNavigationBar";

import MarketToolBarContainer from "../components/MarketToolBarContainer";
import CatalogTab from "../components/CatalogTab";
import MarketOrder from "../components/MarketOrder";
import "./Market.css";
import { useNavigate } from "react-router";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const [cat, setCat] = useState("");

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
          <CatalogTab onSelect={(cat) => setCat(cat)} />
          <DisplaySellItems cat={cat} />
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Market;
