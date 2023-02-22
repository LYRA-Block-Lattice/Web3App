import { FunctionComponent } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import MarketToolBar from "../components/MarketToolBar";
import MarketOrder from "../components/MarketOrder";
import "./Market.css";

const Market: FunctionComponent = () => {
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
      <div className="bottomtabbar">
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
        <div className="tabbar">
          <div className="tabbar-item">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../asserts/box-alt-light.svg"
            />
            <div className="text">Market</div>
          </div>
          <div className="tabbar-item">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../asserts/molecule-light.svg"
            />
            <div className="text">DAO</div>
          </div>
          <div className="tabbar-item">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../asserts/wallet-light.svg"
            />
            <div className="text2">Wallet</div>
          </div>
          <div className="tabbar-item3">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../asserts/user-alt-light.svg"
            />
            <div className="text">Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
