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
import BottomNavigationBar from "../components/BottomNavigationBar";
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
              <Link className="title-section" to="/assertdetailview">
                <div className="sell-parent">
                  <b className="sell">Sell</b>
                  <b className="sell">BTC</b>
                  <img
                    className="frame-child"
                    alt=""
                    src="../asserts/arrow-2.svg"
                  />
                  <b className="tetherusdt">tether/USDT</b>
                </div>
                <div className="details-section">
                  <div className="block3">
                    <div className="sell">Amount</div>
                    <div className="sell">Limit Min</div>
                    <div className="sell">Limit Max</div>
                  </div>
                  <div className="block4">
                    <div className="sell">1113.2</div>
                    <div className="sell">1.2</div>
                    <div className="sell">3.2</div>
                  </div>
                  <div className="block1">
                    <div className="price">Price</div>
                  </div>
                  <div className="block2">
                    <b className="sell">10,323</b>
                  </div>
                  <div className="details-section-child" />
                </div>
              </Link>
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
                <b className="sell">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="sell">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
          <MarketOrder onBannerImage4Click={onBannerImage1Click} />
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Market;
