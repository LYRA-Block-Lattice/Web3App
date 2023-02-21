import { FunctionComponent, useState, useEffect, useCallback } from "react";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useSelector } from "react-redux";
import MarketToolBar from "../components/MarketToolBar";
import TokenCatalogTabs from "../components/TokenCatalogTabs";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";

import "./Market.css";
import { useNavigate } from "react-router";

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
      <PrimaryAccountCard />
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <MarketToolBar />
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
        <TokenCatalogTabs />
      </div>
      <DisplaySellItems cat={cat} />
    </div>
  );
};

export default Market;
