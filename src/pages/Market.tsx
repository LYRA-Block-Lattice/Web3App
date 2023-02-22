import { FunctionComponent, useCallback } from "react";
import MarketToolBar from "../components/MarketToolBar";
import MarketOrder from "../components/MarketOrder";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./Market.css";

const Market: FunctionComponent = () => {
  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onHomeClick = useCallback(() => {
    //TODO: back home
  }, []);

  const onNavigationPrepareSellOrderClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="market">
      <nav className="navigation2">
        <button
          className="mini-programs-buttons"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
        </button>
        <button className="title" onClick={onTitleClick}>
          Market
        </button>
        <div className="mini-programs-buttons1">
          <div className="stroke" />
          <button className="home" onClick={onHomeClick}>
            <img className="ellipse-icon" alt="" src="../asserts/ellipse.svg" />
            <img
              className="ellipse-icon1"
              alt=""
              src="../asserts/ellipse1.svg"
            />
          </button>
          <img
            className="separator-icon"
            alt=""
            src="../asserts/separator.svg"
          />
          <button
            className="navigationprepare-sell-order"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child"
              alt=""
              src="../asserts/rectangle-1.svg"
            />
            <img
              className="navigationprepare-sell-order-item"
              alt=""
              src="../asserts/vector-7.svg"
            />
            <img
              className="navigationprepare-sell-order-inner"
              alt=""
              src="../asserts/vector-8.svg"
            />
          </button>
        </div>
      </nav>
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
