import { FunctionComponent, useState, useEffect } from "react";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useSelector } from "react-redux";
import MarketToolBar from "../components/MarketToolBar";
import TokenCatalogTabs from "../components/TokenCatalogTabs";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import DisplaySellItems from "../dup/DisplaySellItems";

import "./Market.css";

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
        <div className="tradableorderssection">
          <div className="catalogtab">
            <button className="tokentab" onClick={() => setCat("Token")}>
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
            <button className="nft-tab" onClick={() => setCat("NFT")}>
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
            <button className="fiat-tab" onClick={() => setCat("Fiat")}>
              <b className="fiat">Fiat</b>
            </button>
            <button className="fiat-tab" onClick={() => setCat("Goods")}>
              <b className="fiat">Goods</b>
            </button>
            <button className="fiat-tab" onClick={() => setCat("Service")}>
              <b className="fiat">Service</b>
            </button>
          </div>
        </div>
      </div>
      <DisplaySellItems cat={cat} />
    </div>
  );
};

export default Market;
